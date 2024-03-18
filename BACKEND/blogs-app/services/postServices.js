import blogsModel from "../models/blogsModel.js";

const postsServices = {
  createBlog: async (insertObj) => {
    return await blogsModel.create(insertObj);
  },

  findBlog: async ({ blogId }) => {
    return await blogsModel.findById({ _id: blogId });
  },

  findBlogs: async () => {
    return await blogsModel.find({}).populate("comments");
  },

  updateLike: async ({ blogId, likeId }) => {
    return await blogsModel.findByIdAndUpdate(
      blogId,
      { $push: { likes: likeId } },
      { new: true }
    );
  },

  updateComment: async ({ blogId, commentId }) => {
    return await blogsModel.findByIdAndUpdate(
      blogId,
      { $push: { comments: commentId } },
      { new: true }
    );
  },

  updateDeleteComment: async ({ blogId, commentId }) => {
    return await blogsModel.findByIdAndUpdate(
      blogId,
      { $pull: { comments: commentId } },
      { new: true }
    );
  },

  updateUnLike: async ({ blogId, unlikeId }) => {
    return await blogsModel.findByIdAndUpdate(
      blogId,
      { $pull: { likes: unlikeId } },
      { new: true }
    );
  },
};

export default postsServices;
