import React, { Component } from "react";

class Auth extends Component {
  state = {
    username: "tickle122"
  };
  render() {
    console.log(this.state.username);
    return (
      <form>
        <input
          type="text"
          id="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input type="submit" value="Login" onClick={this.handleSubmit} />
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
    this.props.submit = username;
  };
}
export default Auth;
