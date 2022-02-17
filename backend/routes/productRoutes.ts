import express = require("express");
const router: express.Router = express.Router();

const {
  getProducts,
  updateProduct,
  setProduct,
  deleteProduct,
} = require("../controllers/productController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getProducts).post(protect, setProduct);
router.route("/:id").put(protect, updateProduct).delete(protect, deleteProduct);

export = router;
