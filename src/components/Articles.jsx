import React from "react";
import { Link } from "@reach/router";

const Articles = ({ articles, articleCardTrigger }) => {
  return (
    <div className="Articles-list">
      <h2>All Articles</h2>
      <ul>
        {articles.map(article => (
          <li id={article.article_id} key={article.article_id}>
            Title: {article.title} <br />
            Author: {article.author} <br />
            <Link
              to={`/articles/${article.article_id}`}
              onClick={event => articleCardTrigger(article.article_id)}
            >
              Read More...
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
