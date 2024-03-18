import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },

  author: {
    type: String,
    required: true,
  },

  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "like",
  }],

  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "comment",
  }],

  createdAt: {
    type: Date,
    default: Date.now(),
  },

  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

const blogsModel = new mongoose.model("blog", blogSchema);

export default blogsModel;
