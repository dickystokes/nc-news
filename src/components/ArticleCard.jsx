import React from "react";

function ArticleCard({ articles, article_id }) {
  let articleCard = [];
  articles.forEach(article => {
    if (article.article_id === article_id) articleCard.push(article);
  });

  return (
    <div>
      <h2>{articleCard[0].title}</h2>
      {articleCard[0].body}
    </div>
  );
}

export default ArticleCard;
