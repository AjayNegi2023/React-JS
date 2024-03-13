import React, { Component } from "react";
import REF from "./REF";
import Parent from "./RefForwarding/Parent";
class MainREF extends Component {
  render() {
    return (
      <div>
        {/* <REF /> */}
        <Parent />
      </div>
    );
  }
}

export default MainREF;
