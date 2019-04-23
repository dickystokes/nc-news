import React, { Component } from "react";
import { Link } from "@reach/router";

class Articles extends Component {
  render() {
    const { articles } = this.props;
    console.log(articles, "<-- array of articles");
    return (
      <div className="Articles-list">
        <h2>All Articles</h2>
        <ul>
          {articles.map(article => (
            <li id={article.article_id} key={article.article_id}>
              Title: {article.title} <br />
              Author: {article.author} <br />
              <Link to={`/articles/${article.article_id}`}>Read More...</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Articles;
