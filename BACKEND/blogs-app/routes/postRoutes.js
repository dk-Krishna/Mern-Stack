import Express from "express";

// importing controllers
import { createPost, getAllPost } from "../controllers/postController.js";

export default Express.Router()

    .post("/createPost", createPost)
    .get("/getAllPost", getAllPost)
