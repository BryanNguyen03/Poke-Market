require("dotenv").config();

import { Request, Response, NextFunction } from "express";
const express = require("express");
const mongoose = require("mongoose");
const cardRoutes = require("./routes/card");

const app = express();

// middle ware
app.use(express.json());

// log requests
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/collection", cardRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to db & listening on port", process.env.PORT);
    });
  })
  .catch((error: Error) => {
    console.log(error);
  });

process.env;
