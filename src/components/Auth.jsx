import React, { Component } from "react";

class Auth extends Component {
  state = {
    username: "tickle122"
  };
  render() {
    const { user } = this.props;
    return (
      <>
        {user.length === 0 ? (
          <>
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
          </>
        ) : (
          <p className="Auth">
            {`Logged in as ${user[0].name}`}
            <button>Logout</button>
          </p>
        )}
      </>
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
