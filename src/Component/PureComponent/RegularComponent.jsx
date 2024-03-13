import React, { PureComponent, Component } from "react";

export default class RegularComponent extends Component {
  render() {
    console.log("***Regular Component*****");
    return (
      <div>
        <h3>Hii {this.props.name}</h3>
        <h4>Regular Component</h4>
      </div>
    );
  }
}
