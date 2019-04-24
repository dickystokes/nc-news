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
    article_id: 0
  };
  render() {
    return (
      <div className="App">
        <Heading />
        <Nav topics={this.state.topics} />
        <Router className="Router">
          <Articles path="/" />
          <Articles path="/topics/:topic" />
          <ArticleCard
            path={`/articles/:article_id`}
            articles={this.state.articles}
          />
        </Router>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
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

  articleCardTrigger = articleID => {
    console.log(articleID);
    this.setState({
      article_id: articleID
    });
  };
}

export default App;
