import Express from "express";
import bodyParser from "body-parser";

// importing routes
import postRoutes from "./routes/postRoutes.js";

// importing environment variable
import dotenv from "dotenv";
dotenv.config({ path: "./config/config.env" });

const app = Express();

// using middlewares
app.use(bodyParser.json({ extended: true }));
app.use(Express.json());

// Using routes
app.use("/api/v1/posts", postRoutes);

export default app;
