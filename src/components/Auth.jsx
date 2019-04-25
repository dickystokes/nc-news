import React, { Component } from "react";

class Auth extends Component {
  state = {
    username: "tickle122"
  };
  render() {
    console.log(this.state.username);
    console.log(this.props);
    return (
      <form className="Auth" onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
  handleChange = e => {
    const { id, value } = e.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
    this.props.login(username);
  };
}
export default Auth;
