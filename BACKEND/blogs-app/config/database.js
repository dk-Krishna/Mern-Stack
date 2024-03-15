import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI, { dbName: "blogs-app" })
  .then(() => {
    console.log("MongoDB connected Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });
