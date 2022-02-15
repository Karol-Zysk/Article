const express = require("express");
const router = express.Router();
const articleActions = require("../actions/api/articles");
const Article = require("../db/models/article");

router.get("/", articleActions.saveArticle);

module.exports = router;
