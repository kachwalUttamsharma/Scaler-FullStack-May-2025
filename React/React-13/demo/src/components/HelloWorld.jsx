import React, { Component } from "react";

class HelloWorld extends Component {
  // variables and methods
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Hello World, {this.props.name}</h1>;
  }
}

export default HelloWorld;
