import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { hideLoading, showLoading } from "../redux/loaderSlice";
import { Col, message, Row, Card, Button } from "antd";
import { useState } from "react";
import { getShowById } from "../api/show";
import moment from "moment";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { bookShow, makePayment } from "../api/booking";

const BookingShow = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [show, setShow] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const book = async (transactionId) => {
    try {
      dispatch(showLoading());
      const response = await bookShow({
        show: params.id,
        transactionId,
        seats: selectedSeats,
        user: user._id,
      });
      if (response.success) {
        message.success("Show booked successfully!");
        navigate("/myBookings");
      } else {
        message.warning(response.message);
      }
    } catch (error) {
      message.error(error);
    } finally {
      dispatch(hideLoading());
    }
  };

  const handlePayment = async () => {
    if (!stripe || !elements) {
      message.warning("Stripe not loaded yet. Please wait.");
      return;
    }
    if (selectedSeats.length === 0) {
      message.warning("Please select at least one seat.");
      return;
    }
    try {
      dispatch(showLoading());
      const payload = {
        amount: selectedSeats.length * show.ticketPrice * 100, // in paise
        description: `${show.movie.movieName} - ${selectedSeats.length} tickets at ${show.theatre.name}`,
      };
      const response = await makePayment(payload);

      if (response.success) {
        const clientSecret = response.data.clientSecret;

        // confirm card payment
        const { paymentIntent, error } = await stripe.confirmCardPayment(
          clientSecret,
          {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: { name: user.name, email: user.email },
            },
          }
        );
        if (error) {
          message.error(error.message);
        } else if (paymentIntent.status === "succeeded") {
          // booking a ticket
          await book(paymentIntent.id);
          message.success("Payment Successfull");
        }
      }
      setIsProcessing(true);
      dispatch(showLoading());
    } catch (err) {
      message.error(err.message);
    } finally {
      setIsProcessing(false);
      dispatch(hideLoading());
    }
  };
  const getData = async () => {
    try {
      dispatch(showLoading());
      const response = await getShowById({ showId: params.id });
      if (response.success) {
        setShow(response.data);
      } else {
        message.warning(response.message);
      }
    } catch (err) {
      message.error(err.message);
    } finally {
      dispatch(hideLoading());
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const getSeats = () => {
    if (!show) return null;
    const columns = 12;
    const totalSeats = show?.totalSeats;
    const rows = Math.ceil(totalSeats / columns);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="w-100 max-width-600 mx-auto mb-25px">
          <p className="text-center mb-10px">
            Screen this side, you will be watching in this direction
          </p>
          <div className="screen-div"></div>
          <div style={{ margin: "5px" }}>
            <ul className="seat-ul justify-content-center">
              {Array.from(Array(Math.ceil(rows)).keys()).map((row) =>
                Array.from(Array(columns).keys()).map((col) => {
                  // row, col
                  // 0 -> 0*12 + 0 + 1 = 1, 0*12 + 1 + 1 = 2
                  // 1 -> 1*12 + 0 + 1 = 13, 1*12 + 1 + 1 = 14
                  // 2 -> 2*12 + 0 + 1 = 25, 2*12 + 1 + 1 = 26
                  const seatNumber = row * columns + col + 1;
                  if (seatNumber > totalSeats) return null;
                  let seatClass = "seat-btn";
                  if (selectedSeats.includes(seatNumber))
                    seatClass += " selected";
                  if (show.bookedSeats.includes(seatNumber))
                    seatClass += " booked";
                  return (
                    <li key={seatNumber}>
                      <Button
                        className={seatClass}
                        onClick={() => {
                          if (!seatClass.includes("booked")) {
                            setSelectedSeats((prev) =>
                              prev.includes(seatNumber)
                                ? prev.filter((s) => s != seatNumber)
                                : [...prev, seatNumber]
                            );
                          }
                        }}
                      >
                        {seatNumber}
                      </Button>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {show ? (
        <Row gutter={24}>
          <Col span={24}>
            <Card
              title={
                <div className="movie-title-details">
                  <h1>{show?.movie?.movieName}</h1>
                  <p>
                    Theatre: {show?.theatre?.name}, {show?.theatre?.address}
                  </p>
                </div>
              }
              extra={
                <div className="show-name py-3">
                  <h3>
                    <span>Show Name:</span> {show.name}
                  </h3>
                  <h3>
                    <span>Date & Time: </span>
                    {moment(show.date).format("MMM Do YYYY")} at
                    {moment(show.time, "HH:mm").format("hh:mm A")}
                  </h3>
                  <h3>
                    <span>Ticket Price:</span> Rs. {show.ticketPrice}/-
                  </h3>
                  <h3>
                    <span>Total Seats:</span> {show.totalSeats} |
                    <span>Available:</span>
                    {show.totalSeats - show.bookedSeats.length}
                  </h3>
                </div>
              }
              style={{
                width: "99%",
                margin: "15px",
                height: "90%",
                overflow: "auto",
              }}
            >
              {getSeats()}

              {selectedSeats.length > 0 && (
                <div className="max-width-600 mx-auto mt-20">
                  <h3 className="text-center mb-10">
                    Total Amount: ₹{selectedSeats.length * show.ticketPrice}
                  </h3>
                  <CardElement
                    options={{ style: { fontSize: "16px", margin: "5px" } }}
                  />
                  <Button
                    type="primary"
                    shape="round"
                    size="large"
                    block
                    onClick={handlePayment}
                    disabled={isProcessing}
                    style={{ marginTop: "20px" }}
                  >
                    {isProcessing ? "Processing..." : "Pay Now"}
                  </Button>
                </div>
              )}
            </Card>
          </Col>
        </Row>
      ) : (
        <div>Show Doesnt Exisit</div>
      )}
    </div>
  );
};

export default BookingShow;
