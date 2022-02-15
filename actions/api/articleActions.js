const Article = require("../../db/models/article");

class ArticleActions {
  saveArticle(request, response) {
    const title = request.body.title;
    const body = request.body.body;
    response.send("stworzona z danymi : Tytuł : " + title + "body " + body);
  }
  getAllArticles(request, response) {
    response.send("Api działa");
  }
  getOneArticle(request, response) {
    response.send("Info");
  }
  editArticle(request, response) {
    response.send("zaktualizowano");
  }
  deleteArticle(request, response) {
    response.send("usunieto");
  }
}

module.exports = new ArticleActions();
