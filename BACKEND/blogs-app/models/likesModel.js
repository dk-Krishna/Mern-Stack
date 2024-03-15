import mongoose from "mongoose";

const likesSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blog",
  },
});

const likesModel = new mongoose.model("like", likesSchema);

export default likesModel;
