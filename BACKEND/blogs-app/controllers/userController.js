import userServices from "../services/userServices.js";
const {
  createUser,
  findUser,
  findUserWithId,
  likePost,
  findLike,
  unLikePost,
  commentPost,
  findComment,
  deleteCommentPost,
} = userServices;

import postServices from "../services/postServices.js";
const {
  findBlog,
  updateLike,
  updateUnLike,
  updateComment,
  updateDeleteComment,
} = postServices;

export async function signup(req, res, next) {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      res.status(400).json({
        success: false,
        message: "Please enter all fields.",
      });
    }

    const user = await findUser({ email });
    if (user) {
      res.status(400).json({
        success: false,
        message: "User already exists with this email.",
      });
    }

    const newUser = await createUser({ name, email, password });

    res.status(200).json({
      success: true,
      data: newUser,
      message: "User created successfully!",
    });
  } catch (error) {
    console.log("🚀 ~ createPost ~ error:", error);
  }
}

export async function like(req, res, next) {
  const { userId, blogId } = req.body;

  try {
    if (!userId || !blogId) {
      res.status(400).json({
        success: false,
        message: "Please enter all fields.",
      });
    }

    const user = await findUserWithId({ userId });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    const blog = await findBlog({ blogId });
    if (!blog) {
      res.status(400).json({
        success: false,
        message: "Blog not found.",
      });
    }

    const like = await findLike({ userId, blogId });
    if (like) {
      res.status(400).json({
        success: false,
        message: "Blog already liked.",
      });
    } else {
      const liked = await likePost({ userId, blogId });

      const updatedBlog = await updateLike({ blogId, likeId: liked._id });
      await updatedBlog.save();

      res.status(200).json({
        success: true,
        data: liked,
        message: "Post liked successfully!",
      });
    }
  } catch (error) {
    console.log("🚀 ~ createPost ~ error:", error);
  }
}

export async function unLike(req, res, next) {
  const { userId, blogId } = req.body;

  try {
    if (!userId || !blogId) {
      res.status(400).json({
        success: false,
        message: "Please enter all fields.",
      });
    }

    const user = await findUserWithId({ userId });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    const blog = await findBlog({ blogId });
    if (!blog) {
      res.status(400).json({
        success: false,
        message: "Blog not found.",
      });
    }

    const like = await findLike({ userId, blogId });
    if (!like) {
      res.status(400).json({
        success: false,
        message: "Blog not liked.",
      });
    } else {
      const unliked = await unLikePost({ userId, blogId });

      const updatedBlog = await updateUnLike({ blogId, unlikeId: unliked._id });
      await updatedBlog.save();

      res.status(200).json({
        success: true,
        data: unliked,
        message: "Post unliked successfully!",
      });
    }
  } catch (error) {
    console.log("🚀 ~ createPost ~ error:", error);
  }
}

export async function addComment(req, res, next) {
  const { content, userId, blogId } = req.body;

  try {
    if (!content || !userId || !blogId) {
      res.status(400).json({
        success: false,
        message: "Please enter all fields.",
      });
    }

    const user = await findUserWithId({ userId });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    const blog = await findBlog({ blogId });
    if (!blog) {
      res.status(400).json({
        success: false,
        message: "Blog not found.",
      });
    }

    const commented = await commentPost({ content, userId, blogId });

    const updatedBlog = await updateComment({
      blogId,
      commentId: commented._id,
    });
    await updatedBlog.save();

    res.status(200).json({
      success: true,
      data: commented,
      message: "Comment posted successfully!",
    });
  } catch (error) {
    console.log("🚀 ~ createPost ~ error:", error);
  }
}

export async function deleteComment(req, res, next) {
  const { userId, blogId, commentId } = req.body;

  try {
    if (!userId || !blogId || !commentId) {
      res.status(400).json({
        success: false,
        message: "Please enter all fields.",
      });
    }

    const user = await findUserWithId({ userId });
    if (!user) {
      res.status(400).json({
        success: false,
        message: "User not found.",
      });
    }

    const blog = await findBlog({ blogId });
    if (!blog) {
      res.status(400).json({
        success: false,
        message: "Blog not found.",
      });
    }

    const comment = await findComment({ commentId });
    if (!comment) {
      res.status(400).json({
        success: false,
        message: "Comment not found.",
      });
    } else {
      const deletedComment = await deleteCommentPost({
        userId,
        blogId,
        commentId,
      });

      const updatedBlog = await updateDeleteComment({
        blogId,
        commentId: deletedComment._id,
      });
      await updatedBlog.save();

      res.status(200).json({
        success: true,
        data: deletedComment,
        message: "Comment deleted successfully!",
      });
    }
  } catch (error) {
    console.log("🚀 ~ createPost ~ error:", error);
  }
}
