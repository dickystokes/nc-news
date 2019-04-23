import React, { Component } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import * as api from "./api";

class App extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <div className="App">
        <header className="NC News" />
        <Heading />
        <Nav topics={this.state.topics} />
        <Articles />
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
}

export default App;
