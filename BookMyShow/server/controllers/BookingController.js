const stripe = require("stripe")(process.env.STRIPE_KEY);
const Booking = require("../models/bookingSchema");
const User = require("../models/userSchema");
const Show = require("../models/showSchema");

const makePayment = async (req, res) => {
  try {
    const { amount, description, userId } = req.body;
    if (!amount) {
      return res.status(400).send({
        success: false,
        message: "Amount is required (in smallest currency unit, e.g. paise).",
      });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    const bookMyShowAddress = {
      line1: "BookMyShow Office, 1st Floor, Cinema Plaza",
      line2: "Near Central Mall",
      city: "Mumbai",
      state: "Maharashtra",
      postal_code: "400001",
      country: "IN",
    };

    let stripeCustomer = null;
    const exisiting = await stripe.customers.list({
      email: user.email,
      limit: 1,
    });
    if (exisiting.data && exisiting.data.length > 0) {
      stripeCustomer = exisiting.data[0];
      const needUpdate =
        !stripeCustomer.address ||
        !stripeCustomer.address.line1 ||
        !stripeCustomer.name;

      if (needUpdate) {
        stripeCustomer = await stripe.customers.update(stripeCustomer.id, {
          name: user.name,
          email: user.email,
          address: bookMyShowAddress,
        });
      }
    } else {
      stripeCustomer = await stripe.customers.create({
        name: user.name,
        email: user.email,
        address: bookMyShowAddress,
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      description,
      customer: stripeCustomer.id,
      currency: "inr",
      automatic_payment_methods: { enabled: true },
      receipt_email: user.email,
      shipping: {
        name: user.name,
        address: bookMyShowAddress,
      },
    });

    return res.send({
      success: true,
      message: "PaymentIntent created successfully",
      data: {
        clientSecret: paymentIntent.client_secret,
        paymentIntentId: paymentIntent.id,
      },
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message || "Stripe error",
    });
  }
};
const bookShow = async (req, res, next) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    const show = await Show.findById(req.body.show);
    const updatedBookedSeats = [...show.bookedSeats, ...req.body.seats];
    await Show.findByIdAndUpdate(req.body.show, {
      bookedSeats: updatedBookedSeats,
    });
    res.send({
      success: true,
      message: "Payment Successfull",
      data: newBooking,
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.body.userId })
      .populate({
        path: "user",
        select: "-password",
      })
      .populate({
        path: "show",
        populate: {
          path: "movie",
          model: "movies",
        },
      })
      .populate({
        path: "show",
        populate: {
          path: "theatre",
          model: "theatres",
        },
      });
    res.send({
      success: true,
      message: "Bookings Fetched",
      data: bookings,
    });
  } catch (error) {
    res.status(400);
    next(error);
  }
};

module.exports = {
  bookShow,
  makePayment,
  getAllBookings,
};
