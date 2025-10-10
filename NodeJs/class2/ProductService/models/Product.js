const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_price: { type: Number, required: true },
    isInStock: { type: Boolean, required: true },
    category: { type: String, required: true },
    product_description: { type: String, required: true },
  },
  { timestamps: true }
);

productSchema.pre("save", function (next) {
  console.log("prev hook has been called");
  next();
});

productSchema.post("save", function (doc, next) {
  console.log("post hook has been called");
  console.log(`Product ${doc} has been added`);
  next();
});

module.exports = mongoose.model("products", productSchema);
