const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    if (response) {
      console.log("MongoDb connection is successfull");
    }
  } catch (error) {
    console.log("MongoDB connection error ", error);
    process.exit(1);
  }
};

module.exports = connectDB;
