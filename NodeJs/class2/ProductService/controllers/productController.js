const ProductModel = require("../models/Product");

const createProduct = async (req, res) => {
  const {
    product_name,
    product_price,
    isInStock,
    category,
    product_description,
  } = req.body;
  try {
    const product = new ProductModel({
      product_name,
      product_price,
      isInStock,
      category,
      product_description,
    });
    await product.save();
    res.status(201).json({ message: "Product created", product });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const products = await ProductModel.find();
    const html = `${products.map(
      (product) => `<div>
            <ul>
                <li>${product.product_name}</li>
                <li>${product.product_price}</li>
                <li>${product.isInStock}</li>
                <li>${product.category}</li>
                <li>${product?.product_description}</li>
            </ul>
        </div>`
    )}`;
    // res.json(products);
    res.send(html);
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const Id = req.params.id;
    const product = await ProductModel.findByIdAndUpdate(Id, req.body);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    const updatedProduct = await ProductModel.findById(Id);
    res.json({ message: "product updated", updatedProduct });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const Id = req.params.id;
    const product = await ProductModel.findByIdAndDelete(Id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "product deleted" });
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

const getProductById = async (req, res) => {
  try {
    const Id = req.params.id;
    const product = await ProductModel.findById(Id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(400).json({ message: "something went wrong" });
  }
};

module.exports = {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
