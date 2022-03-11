const mongoogse = require("mongoose");

const blogSchema = new mongoogse.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    imageURL: {
        type: String,
    },
});

module.exports = Blog = mongoogse.model("Blog", blogSchema);
