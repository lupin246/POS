const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
  res.status(200).json([
    { id: 1, name: "Coke" },
    { id: 2, name: "Sprite" },
  ]);
});

const setProduct = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    res.status(400);
    throw new Error("Invalid product name");
  }
  res.status(200).json([{ message: "Create product" }]);
});

const updateProduct = asyncHandler(async (req, res) => {
  res.status(200).json([{ message: `Update product ${req.params.id}` }]);
});

const deleteProduct = asyncHandler(async (req, res) => {
  res.status(200).json([{ message: `Delete product ${req.params.id}` }]);
});

module.exports = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
};
