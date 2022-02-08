const express = require("express");
const router = express.Router();

const {
  getProducts,
  updateProduct,
  setProduct,
  deleteProduct,
} = require("../controllers/productController.js");

router.route("/").get(getProducts).post(setProduct);

router.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = router;
