import Express from "express";

// importing controllers
import {
  signup,
  like,
  unLike,
  addComment,
  deleteComment,
} from "../controllers/userController.js";

export default Express.Router()

  .post("/signup", signup)
  .post("/like", like)
  .post("/unLike", unLike)
  .post("/addComment", addComment)
  .post("/deleteComment", deleteComment);
