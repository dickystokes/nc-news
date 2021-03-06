import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    const { topic } = this.props;
    return (
      <div className="Articles-list">
        <h2>
          {topic === undefined
            ? `Articles about Everything`
            : `Articles about ${topic}`}
        </h2>
        <ul className="list-of-articles">
          {articles.map(article => (
            <li
              id={article.article_id}
              key={article.article_id}
              className="article"
            >
              Title: {article.title} <br />
              Author: {article.author} <br />
              <Link to={`/articles/${article.article_id}`} articles={articles}>
                Read More...
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.topic !== prevProps.topic) this.fetchArticles();
  }

  fetchArticles = () => {
    api
      .getArticles(this.props.topic)
      .then(articles => {
        this.setState({
          articles
        });
      })
      .catch(() => {
        const { navigate } = this.props;
        navigate("/errors/404", {
          replace: true,
          state: { msg: `couldn’t find any articles on your request` }
        });
      });
  };
}

export default Articles;
