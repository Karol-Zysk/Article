const mongoose = require("mongoose");

const Article = mongoose.model("Article", { title: String, body: String });

module.exports = Article;
