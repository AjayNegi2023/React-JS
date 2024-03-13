import React, { PureComponent, Component } from "react";
import RegularComponent from "./RegularComponent";
import PureComponentReact from "./PureComponent";

export default class Parent extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "Ajay",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "Ajay" });
    }, 2000);
  }
  render() {
    console.log("Parent Component");
    return (
      <div>
        <RegularComponent name={this.state.name} />
        <PureComponentReact name={this.state.name} />
      </div>
    );
  }
}
