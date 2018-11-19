import React from "react";
import ReactDOM from "react-dom";
import { Link, Router } from "@reach/router";
import HomePage from "./pages/home_page";
import ProfilePage from "./pages/profile_page";
import SearchPage from "./pages/search_page";
import LoginPage from "./pages/login_page";
import SignupPage from "./pages/signup_page";
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
      <HomePage path="/" />
      <ProfilePage name="oreculf" path="/profile" />
      <SearchPage path="/search" />
      <LoginPage path="/login" />
      <SignupPage path="/signup" />
    </Router>
  </div>
);

ReactDOM.render(<App />, document.getElementById("container"));
