import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { articles } = this.state;
    return (
      <div className="Articles-list">
        <h2>All Articles</h2>
        <ul>
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
