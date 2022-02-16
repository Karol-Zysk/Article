import React from "react";
import style from "../../Articles/Articles.module.css";

const Article = ({ id, title, body, onDelete, showModal, setShowModal }) => {
  const setShowModalHandler = () => {
    setShowModal(true);
  };
  return (
    <div className={style.article}>
      <h2 className={style.article_h2}>{title}</h2>
      <p className={style.article_paragraph}>{body}</p>
      <button onClick={() => onDelete(id)}>Usuń</button>
      <button onClick={setShowModalHandler}>Edytuj</button>
    </div>
  );
};

export default Article;
