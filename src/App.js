import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import { Router } from "@reach/router";
import * as api from "./api";
import ArticleCard from "./components/ArticleCard";
import Toolbar from "./components/Toolbar";
class App extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="App">
        <Heading />
        <Nav topics={this.state.topics} />
        <Toolbar />
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

  login = username => {
    api
      .getUser(username)
      .then(user => {})
      .catch(console.log);
  };
}

export default App;
