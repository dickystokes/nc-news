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
          <form className="Auth" onSubmit={this.handleLogout}>
            {`Logged in as ${user[0].name}`}
            <input type="submit" value="Logout" />
          </form>
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

  handleLogout = e => {
    e.preventDefault();
    this.props.logout();
  };
}

export default Auth;
