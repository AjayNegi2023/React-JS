import React, { Component, useState } from "react";

const HOC = (OriginalComponent) => {
  class NewComponent extends Component {
    constructor() {
      super();

      this.state = {
        count: 0,
      };
    }

    increment = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1
      }));
    };
    render() {
      return (
        <OriginalComponent
          name="Ajay"
          count={this.state.count}
          increment={this.increment}
        />
      );
    }
  }
  return NewComponent;
};

export default HOC;
