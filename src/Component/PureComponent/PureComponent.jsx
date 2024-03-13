import React, { PureComponent } from "react";

export default class PureComponentReact extends PureComponent {
  render() {
    console.log("**************Pure Component***********");
    return (
      <div>
        <h3>Hii {this.props.name}</h3>
        <h4>PureComponent Component</h4>
      </div>
    );
  }
}
