import jwt = require("jsonwebtoken");
import asyncHandler = require("express-async-handler");
import User from "../models/userModel";
import { NextFunction, Request, Response } from "express";

const protect = asyncHandler(
  async (req: any, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        //get token from header
        token = req.headers.authorization.split(" ")[1];

        //verify token
        const decoded: any = jwt.verify(token, process.env.JWT_SECRET);

        //get user from token
        req.user = await User.findById(decoded.id).select("-password");

        next();
      } catch (e) {
        console.log(e);
        res.status(401);
        throw new Error("Not authorized");
      }
    }

    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
);

export = { protect };
