import moment from "moment";
import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8"]);
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("success");
    const PORT = process.env.PORT ?? 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} at ${moment().fromNow()}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
