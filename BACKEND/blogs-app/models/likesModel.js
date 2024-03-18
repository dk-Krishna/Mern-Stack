import mongoose from "mongoose";

const likesSchema = new mongoose.Schema({
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

const likesModel = new mongoose.model("like", likesSchema);

export default likesModel;
