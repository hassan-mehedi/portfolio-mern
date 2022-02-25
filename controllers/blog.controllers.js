const Blog = require("../models/blog.models.js");

const createBlog = async (req, res) => {
    try {
        const blog = new Blog(req.body);
        await blog.save();
        res.status(200).json({
            data: blog,
            message: "Successfully Created Blog",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

const findAllBlog = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({
            data: blogs,
            message: "Successfully Fetched Blogs",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

const findBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        res.status(200).json({
            data: blog,
            message: "Successfully Fetched Blog",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

const updateBlogId = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.status(200).json({
            data: blog,
            message: "Successfully Updated Blog",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

const deleteBlogId = async (req, res) => {
    try {
        await Blog.findByIdAndRemove(req.params.id);
        res.status(200).json({
            message: "Successfully Deleted Blog",
        });
    } catch (error) {
        res.status(404).json({
            message: error.message,
        });
    }
};

module.exports = {
    createBlog,
    findAllBlog,
    findBlogById,
    updateBlogId,
    deleteBlogId,
};
