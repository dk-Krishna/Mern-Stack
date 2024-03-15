import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },

  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'blog',
  }
});

const commentModel = mongoose.model('comment', commentSchema);

export default commentModel;
