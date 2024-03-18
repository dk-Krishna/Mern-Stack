import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  blogId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blog",
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const commentModel = mongoose.model("comment", commentSchema);

export default commentModel;
