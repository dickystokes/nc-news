import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import * as api from "./api";
import ArticleCard from "./components/ArticleCard";

class App extends Component {
  state = {
    topics: [],
    articles: [],
    article_id: 0
  };
  render() {
    return (
      <div className="App">
        <Heading />
        <Nav topics={this.state.topics} />
        <Router className="Router">
          <Articles
            path="/"
            articles={this.state.articles}
            articleCardTrigger={this.articleCardTrigger}
          />
          <ArticleCard
            path={`/articles/${this.state.article_id}`}
            articles={this.state.articles}
            article_id={this.state.article_id}
          />
        </Router>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
    this.fetchArticles();
  }

  fetchTopics = () => {
    api
      .getTopics()
      .then(topics => {
        this.setState({
          topics
        });
      })
      .catch(console.log, "<--this is an error");
  };

  fetchArticles = () => {
    api
      .getArticles()
      .then(articles => {
        this.setState({
          articles
        });
      })
      .catch(console.log, "<--this is an error");
  };

  articleCardTrigger = articleID => {
    console.log(articleID);
    this.setState({
      article_id: articleID
    });
  };
}

export default App;
