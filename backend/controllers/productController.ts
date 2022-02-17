import asyncHandler = require("express-async-handler");
import express = require("express");

const Product = require("../models/productModel");

const getProducts = asyncHandler(
  async (req: express.Request, res: express.Response) => {
    const products = await Product.find();
    res.status(200).json(products);
  }
);

const setProduct = asyncHandler(
  async (req: express.Request, res: express.Response) => {
    if (!req.body.name) {
      res.status(400);
      throw new Error("Invalid product name.");
    }

    const product = await Product.create({
      name: req.body.name,
    });

    res.status(200).json(product);
  }
);

const updateProduct = asyncHandler(
  async (req: express.Request, res: express.Response) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(400);
      throw new Error("Product not found.");
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedProduct);
  }
);

const deleteProduct = asyncHandler(
  async (req: express.Request, res: express.Response) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
      res.status(400);
      throw new Error("Product not found.");
    }

    await product.remove();

    res.status(200).json({ id: req.params.id });
  }
);

export = {
  getProducts,
  setProduct,
  updateProduct,
  deleteProduct,
};
