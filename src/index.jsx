import React from "react";
import ReactDOM from "react-dom";
import { Link } from "@reach/router";
import "./index.scss";

const App = () => (
  <div>
    <h1>Duyan</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="search">Search</Link>
    </nav>
  </div>
);

ReactDOM.render(<App />, document.getElementById("container"));
