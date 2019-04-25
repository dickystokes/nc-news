import React, { Component } from "react";
import Comments from "../components/Comments";
import "./css/ArticleCard.css";
import * as api from "../api";

class ArticleCard extends Component {
  state = {
    article: [],
    OptimisticVote: 0
  };
  render() {
    const { article } = this.state;
    const { article_id, user } = this.props;

    return (
      <div className="article-card">
        <main className="articles">
          <h2>{article.title}</h2>
          <p>{article.author}</p>
          <p>{article.body}</p> <hr />
          Votes : {article.votes + this.state.OptimisticVote}
          <button
            onClick={e => {
              if (user.length === 0) {
                window.confirm("Please log in");
                this.setState({ OptimisticVote: 0 });
              } else if (this.state.OptimisticVote === 1) {
                window.confirm("You have already spread the love!");
              } else {
                api
                  .changeArticleVote(1, article.article_id)
                  .then(OptimisticVote => {
                    this.setState({
                      OptimisticVote: this.state.OptimisticVote + 1
                    });
                  });
              }
            }}
          >
            I love it!
          </button>
          <button
            onClick={e => {
              if (user.length === 0) {
                window.confirm("Please log in");
                this.setState({ OptimisticVote: 0 });
              } else if (this.state.OptimisticVote === -1) {
                window.confirm("Stop being such a hater, we get it!");
              } else {
                api
                  .changeArticleVote(-1, article.article_id)
                  .then(OptimisticVote => {
                    this.setState({
                      OptimisticVote: this.state.OptimisticVote - 1
                    });
                  });
              }
            }}
          >
            This is Rubbish!
          </button>
        </main>
        <Comments article_id={article_id} user={user} />
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
