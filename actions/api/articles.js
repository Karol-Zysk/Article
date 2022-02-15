const Article = require("../../db/models/article");

module.exports = {
  saveArticle(request, response) {
    const newArticle = new Article({
      title: "zrobić zakupy",
      body: "jaja , mleko",
    });

    newArticle.save().then(() => {
      console.log("Artykuł zapisany");
    });

    response.send("Działa");
  },
};
