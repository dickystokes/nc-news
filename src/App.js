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
import Auth from "./components/Auth";

class App extends Component {
  state = {
    topics: [],
    user: []
  };
  render() {
    return (
      <div className="App">
        <Heading />
        <Nav topics={this.state.topics} />
        <Auth login={this.login} logout={this.logout} user={this.state.user} />
        <Toolbar />
        <Router className="Router">
          <Articles path="/" />
          <Articles path="/topics/:topic" />
          <ArticleCard
            user={this.state.user}
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
    const storedData = JSON.parse(localStorage.getItem("user"));
    storedData !== []
      ? this.setState({ user: storedData })
      : this.setState({ user: [] });
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
      .then(user => {
        localStorage.setItem("user", JSON.stringify(user));
        this.setState({
          user
        });
      })
      .catch(console.log);
  };

  logout = () => {
    this.setState({
      user: ""
    });
  };
}

export default App;
