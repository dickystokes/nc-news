import React, { Component } from "react";

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
              Author: {article.author}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Articles;
