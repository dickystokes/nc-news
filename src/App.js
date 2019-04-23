import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import { Router, Link } from "@reach/router";
import * as api from "./api";

class App extends Component {
  state = {
    topics: [],
    articles: []
  };
  render() {
    return (
      <div className="App">
        <Heading />
        <Nav topics={this.state.topics} />
        <Router className="Router">
          <Articles path="/" articles={this.state.articles} />
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
}

export default App;
