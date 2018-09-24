import React, { Component } from "react";

class HelloWorld extends Component {
  constructor() {
    super();

    this.state = {
      name: "World",
    };
  }

  render() {
    const { name } = this.state;
    return <h1>Hello {name}!</h1>;
  }
}

export default HelloWorld;
