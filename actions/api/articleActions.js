const res = require("express/lib/response");
const Article = require("../../db/models/article");

class ArticleActions {
  async saveArticle(request, response) {
    const title = request.body.title;
    const body = request.body.body;

    const article = new Article({ title, body });
    await article.save();

    response.status(200).json(article);
  }
  async getAllArticles(request, response) {
    const doc = await Article.find({});

    response.status(200).json(doc);
  }

  //pobranie jednego artykułu
  async getOneArticle(request, response) {
    const id = request.params.id;
    const article = await Article.findOne({ _id: id });
    response.status(200).json(article);
  }

  //aktualizacja
  async updateArticle(request, response) {
    const id = request.params.id;
    const title = request.body.title;
    const body = request.body.body;

    const article = await Article.findOne({ _id: id });
    article.title = title;
    article.body = body;

    await article.save();

    response.status(201).json(article);
  }

  //usunięcie
  deleteArticle(request, response) {
    response.send("usunieto");
  }
}

module.exports = new ArticleActions();
