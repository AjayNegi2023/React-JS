import React, { Component } from "react";
import InputChild from "./InputChild.jsx";
class Parent extends Component {
  constructor() {
    super();

    this.inputRef = React.createRef();
  }
  render() {
    return (
      <>
        <InputChild ref={this.inputRef} />
        <button onClick={() => this.inputRef.current.focus()}>
          Focus
        </button>
      </>
    );
  }
}

export default Parent;
