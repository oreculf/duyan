import React from "react";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <p>Username: {username}</p>
        <input
          type="text"
          value={username}
          onChange={event => {
            this.setState({ username: event.target.value });
          }}
        />
        <p>Password: {password}</p>
        <input
          type="password"
          value={password}
          onChange={event => {
            this.setState({ password: event.target.value });
          }}
        />
      </div>
    );
  }
}

export default LoginPage;
