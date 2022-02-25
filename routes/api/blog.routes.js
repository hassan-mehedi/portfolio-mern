const express = require("express");
const blogController = require("../../controllers/blog.controllers.js");

const router = express.Router();

// @route GET/POST api/blogs
// @desc Retrieve/create blog
// @access Private
router.route("/").get(blogController.findAllBlog).post(blogController.createBlog);

// @route GET/PUT/DELETE api/blogs/:id
// @desc Get/Update/Delete a single blog
// @access Public/Private/Private
router
    .route("/:id")
    .get(blogController.findBlogById)
    .put(blogController.updateBlogId)
    .delete(blogController.deleteBlogId);

module.exports = router;
