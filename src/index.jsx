import React from "react";
import ReactDOM from "react-dom";
import { Link, Router } from "@reach/router";
import "./index.scss";

const App = () => (
  <div>
    <h1>Duyan</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="search">Search</Link>
      <Link to="profile">Profile</Link>
      <Link to="login">Login</Link>
      <Link to="signup">Signup</Link>
    </nav>

    <Router>
      <Home path="/" />
      <Search path="/search" />
      <Profile name="oreculf" path="/profile" />
      <Login path="/login" />
      <Signup path="/signup" />
    </Router>
  </div>
);

const Home = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);
const Search = () => (
  <div>
    <h2>Search</h2>
  </div>
);
const Profile = ({ name }) => (
  <div>
    <h2>Welcome {name}</h2>
  </div>
);
// const Login = () => (
//   <div>
//     <h2>Login</h2>
//   </div>
// );
class Login extends React.Component {
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
const Signup = () => (
  <div>
    <h2>Signup</h2>
  </div>
);

ReactDOM.render(<App />, document.getElementById("container"));
