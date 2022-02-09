import express = require("express");
const router: express.Router = express.Router();

const {
  getProducts,
  updateProduct,
  setProduct,
  deleteProduct,
} = require("../controllers/productController");

router.route("/").get(getProducts).post(setProduct);

router.route("/:id").put(updateProduct).delete(deleteProduct);

export = router;
