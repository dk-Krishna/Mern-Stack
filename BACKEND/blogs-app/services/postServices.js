import blogsModel from "../models/blogsModel.js";

const postsServices = {
    createBlog: async (insertObj) => {
        return await blogsModel.create(insertObj);
    },
}

export default postsServices;