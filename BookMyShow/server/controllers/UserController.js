const userModel = require("../models/userSchema");

const registerUser = async (req, res) => {
  try {
    // check if user already exists
    const userExists = await userModel.findOne({ email: req?.body?.email });
    if (!userExists) {
      return res.send({
        success: false,
        message: "User Already Exists",
      });
    }
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

    res.send({
      success: true,
      message: "You've successfully Logged In",
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
