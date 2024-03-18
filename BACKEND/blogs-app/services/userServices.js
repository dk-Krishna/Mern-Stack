import commentModel from "../models/commentModel.js";
import likesModel from "../models/likesModel.js";
import userModel from "../models/userModel.js";

const userServices = {
  createUser: async (insertObj) => {
    return await userModel.create(insertObj);
  },

  likePost: async (insertObj) => {
    return await likesModel.create(insertObj);
  },

  commentPost: async (insertObj) => {
    return await commentModel.create(insertObj);
  },

  unLikePost: async (insertObj) => {
    return await likesModel.findOneAndDelete(insertObj);
  },

  deleteCommentPost: async ({ userId, blogId, commentId }) => {
    return await commentModel.findOneAndDelete({
      userId,
      blogId,
      _id: commentId,
    });
  },

  findUser: async ({ email }) => {
    return await userModel.findOne({ email });
  },

  findLike: async ({ userId, blogId }) => {
    return await likesModel.findOne({ userId, blogId });
  },

  findComment: async ({ commentId }) => {
    return await commentModel.findOne({ _id: commentId });
  },

  findUserWithId: async ({ userId }) => {
    return await userModel.findById({ _id: userId });
  },
};

export default userServices;
