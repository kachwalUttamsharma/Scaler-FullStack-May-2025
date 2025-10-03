const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url =
      "mongodb+srv://uttamsharma:0d2heUtjy2kE1Owa@cluster0.urf16jo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const response = await mongoose.connect(url);
    console.log(response);
    console.log("MongoDb connection is successfull");
  } catch (error) {
    console.log("MongoDB connection error ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
