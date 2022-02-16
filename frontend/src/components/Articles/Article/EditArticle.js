import React from "react";
import style from "../../Articles/Articles.module.css";

const EditArticle = ({ editArticle, article, title, body }) => {
  const [newTitle, setTitle] = React.useState("");
  const [newBody, setBody] = React.useState("");

  const setBodyHandler = (event) => {
    const value = event.target.value;
    setBody(value);
  };

  const setTitleHandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const settArticle = () => {
    const article = {
      title: newTitle,
      body: newBody,
    };
    editArticle();
    setTitle("");
    setBody("");
  };
  return (
    <div className={style.article}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>Tytuł: </label>
        <input
          type="text"
          placeholder="Article Title..."
          value={newTitle}
          onChange={setTitleHandler}
        ></input>
        <label>Treść Artykułu: </label>
        <textarea
          placeholder="Write..."
          onChange={setBodyHandler}
          value={newBody}
        ></textarea>
      </div>
      <button onClick={settArticle}>Save</button>
    </div>
  );
};

export default EditArticle;
