import React from "react";
import ComponentC from "./ComponentC";
import { UserContext } from "./Context";
class ComponentB extends React.Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
        {this.context}
        <ComponentC />
      </div>
    );
  }
}

export default ComponentB;
