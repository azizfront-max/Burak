import moment from "moment";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("success");
    const PORT = process.env.PORT ?? 3000;
  })
  .catch((err) => {
    console.log(err);
  });
