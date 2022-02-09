import mongoose = require("mongoose");

interface Product {
  name: string;
}

const productSchema: mongoose.Schema<Product> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a product name"],
    },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Product", productSchema);

export = ProductModel;
