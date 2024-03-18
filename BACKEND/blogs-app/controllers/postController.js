import Joi from "joi";

import postsServices from "../services/postServices.js";
const { createBlog, findBlogs } = postsServices;

export async function createPost(req, res, next) {
  const { title, content, author } = req.body;

  try {
    if (!title || !content || !author) {
      res.status(400).json({
        success: false,
        message: "Please enter all fields",
      });
    }

    const blog = await createBlog({ title, content, author });

    res.status(200).json({
      success: true,
      data: blog,
      message: "Post created successfully!",
    });
  } catch (error) {
    console.log("🚀 ~ createPost ~ error:", error);
  }
}

export async function getAllPost(req, res, next) {
  try {
    const blogs = await findBlogs();

    res.status(200).json({
      success: true,
      data: blogs,
      message: "Posts retrived successfully!",
    });
  } catch (error) {
    console.log("🚀 ~ createPost ~ error:", error);
  }
}
