const express = require("express");
const connectDB = require("./config/db");
const ProductModel = require("./models/Product");

const app = express();
const port = 3000;

app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const createProduct = async (req, res) => {
  const {
    product_name,
    product_price,
    isInStock,
    category,
    product_description,
  } = req.body;
  try {
    const product = await ProductModel.create({
      product_name,
      product_price,
      isInStock,
      category,
      product_description,
    });
    res.status(201).json({ message: "Product created", product });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

app.post("/createProduct", createProduct);

const getAllProduct = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};
app.get("/getAllProducts", getAllProduct);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
