import Express from "express";

// importing controllers
import { createPost } from "../controllers/postController.js";

export default Express.Router()

    .post("/createPost", createPost)
