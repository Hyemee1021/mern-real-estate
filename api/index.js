import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import listingRouter from "./routes/listing.route.js";
dotenv.config();
const app = express();

app.use(express.json());

app.use(cookieParser());
//put mongoose string
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.use("/api/listing", listingRouter);
