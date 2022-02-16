import React from "react";
import style from "./Articles.module.css";
import Article from "./Article/Article";
import logo from "./logo.PNG";
import NewArticle from "./Article/NewArticle";
import Modal from "react-modal";
import EditArticle from "./Article/EditArticle";

const Articles = (props) => {
  const [articles, setArticleChange] = React.useState([
    {
      id: 2345,
      title: "siłka",
      body: "trzeba ćwiczyć by dobrze wyglądać",
    },
    {
      id: 2346,
      title: "fitness",
      body: "trzeba biegać by być chudym",
    },
    {
      id: 2347,
      title: "sztuki walki",
      body: "Trening sztuk walki da Ci pewność siebie",
    },
  ]);
  const [showModal, setShowModal] = React.useState(true);
  const deleteArticle = (id) => {
    setArticleChange(articles.filter((article) => article.id !== id));
  };

  const addArticle = (article) => {
    setArticleChange((articles) => [...articles, article]);
    console.log("działajet");
  };

  const editArticle = (article) => {
    setArticleChange((articles) => [...articles]);
    const index = articles.findIndex((x) => x.id === articles.id);
    if (index >= 0) articles[index] = article;
    setArticleChange({ articles });
    console.log(index);
  };

  return (
    <div className={style.container}>
      <div className={style.article_card}>
        <img src={logo} alt="img" className={style.article_card_logo}></img>
        {articles.map((art) => (
          <Article
            key={art.id}
            title={art.title}
            body={art.body}
            id={art.id}
            onDelete={(id) => deleteArticle(id)}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        ))}
        <Modal
          isOpen={showModal}
          contentLabel="Edit Article"
          editArticle={(article) => editArticle(article)}
        >
          <button onClick={() => setShowModal(false)}>X</button>
          <EditArticle />
        </Modal>
        <NewArticle
          addArticle={(article) => addArticle(article)}
          title={articles.title}
          body={articles.body}
        />
      </div>
    </div>
  );
};

export default Articles;
