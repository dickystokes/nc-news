import React, { Component } from "react";
import Comments from "../components/Comments";
import "./css/ArticleCard.css";
import * as api from "../api";

class ArticleCard extends Component {
  state = {
    article: []
  };
  render() {
    const { article } = this.state;
    const { article_id } = this.props;

    return (
      <div className="article-card">
        <main className="articles">
          <h2>{article.title}</h2>
          {article.author} <p />
          {article.body} <hr />
          Votes : {article.votes}
          <button> I love it!</button>
          <button>This is Rubbish!</button>
        </main>
        <Comments article_id={article_id} />
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    api
      .getArticle(this.props.article_id)
      .then(article => {
        this.setState({
          article
        });
      })
      .catch(console.log, "<--this is an error");
  };
}

export default ArticleCard;
