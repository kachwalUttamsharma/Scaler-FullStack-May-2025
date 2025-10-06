const express = require("express");
const {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
} = require("../controllers/productController");
const router = express.Router();

router.post("/createProduct", createProduct);
router.get("/getAllProducts", getAllProduct);
router.patch("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/getProductsById/:id", getProductById);

module.exports = router;
