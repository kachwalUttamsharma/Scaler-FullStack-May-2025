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

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
