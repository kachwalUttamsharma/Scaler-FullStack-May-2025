const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    // admin - bookmyshow onboarding of theatre and movies
    // partner - they will decide when to run how many to run and cost of tickets
    // user - who will book tickets
    role: {
      type: String,
      enum: ["admin", "partner", "user"],
      required: true,
      default: "user",
    },
    otp: {
      type: String,
    },
    otpExpiry: {
      type: Date,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  const now = new Date();
  this.updatedAt = now;
  if (!this.createAt) {
    this.createAt = now;
  }
  console.log("from pre hook", now, this);
  next();
});

userSchema.post("save", function (doc, next) {
  console.log(`User ${doc.name} has been saved`);
  next();
});

module.exports = mongoose.model("users", userSchema);
