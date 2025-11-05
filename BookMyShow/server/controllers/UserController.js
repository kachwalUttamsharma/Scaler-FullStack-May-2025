const userModel = require("../models/userSchema");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    // check if user already exists
    const userExists = await userModel.findOne({ email: req?.body?.email });
    if (userExists) {
      return res.send({
        success: false,
        message: "User Already Exists",
      });
    }

    // how we can encrypt a password will pick it update security
    const newUser = new userModel(req?.body);
    await newUser.save();

    res.send({
      success: true,
      message: "Registraion is Successfull, Please Login",
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req?.body?.email });
    if (!user) {
      return res.send({
        success: false,
        message: "User does not exist, please register",
      });
    }

    if (req?.body?.password !== user?.password) {
      return res.send({
        success: false,
        message: "please enter valid password",
      });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1d" }
    );

    // res.cookie("Access_token", token, { maxAge: "1d" });
    res.send({
      success: true,
      message: "You've successfully Logged In",
      data: token,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const currentUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.body.userId);
    res.send({
      success: true,
      message: "User Details Fetched Successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

const forgetPassword = async (req, res, next) => {
  try {
    const { email } = req.body;
    if (email == undefined) {
      return res.status(401).json({
        status: "false",
        message: "Please enter the email for forget Password",
      });
    }
    let user = await userModel.findOne({ email: email });
    if (user == null) {
      return res.status(404).json({
        status: false,
        message: "user not found",
      });
    } else if (user?.otp != undefined && user.otp < user?.otpExpiry) {
      return res.json({
        success: false,
        message: "Please use otp sent on mail",
      });
    }
    const otp = Math.floor(Math.random() * 10000 + 90000);
    console.log("otp generated : ", otp);
    user.otp = otp;
    user.otpExpiry = Date.now() + 10 * 60 * 1000;
    await user.save();
    // integrate email server //smtp protocol
    res.send({
      success: true,
      message: "Otp has been sent",
    });
  } catch (err) {
    res.status(500), next(err);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { password, otp } = req.body;
    if (password == undefined || otp == undefined) {
      return res.status(401).json({
        success: false,
        message: "invalid request",
      });
    }
    const user = await userModel.findOne({ otp: otp });
    if (user == null) {
      return res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
    if (Date.now() > user.otpExpiry) {
      user.otp = null;
      user.otpExpiry = null;
      await user.save();
      return res.status(401).json({
        success: false,
        message: "otp expired",
      });
    }
    user.otp = null;
    user.otpExpiry = null;
    user.password = password;
    await user.save();
    res.send({
      success: true,
      message: "Password reset has been done successfully",
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
module.exports = {
  registerUser,
  loginUser,
  currentUser,
  forgetPassword,
  resetPassword,
};
