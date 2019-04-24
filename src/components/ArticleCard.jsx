import React from "react";
import Comments from "../components/Comments";
import "./css/ArticleCard.css";

function ArticleCard({ articles, article_id }) {
  let articleCard = [];
  articles.forEach(article => {
    if (article.article_id === article_id) articleCard.push(article);
  });

  return (
    <div className="article-card">
      <main className="articles">
        <h2>{articleCard[0].title}</h2>
        {articleCard[0].author} <p />
        {articleCard[0].body}
      </main>
      <Comments article_id={article_id} />
    </div>
  );
}

export default ArticleCard;
