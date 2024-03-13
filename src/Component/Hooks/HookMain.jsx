import React from "react";
import UseReducer1 from "./UseReducer/UseReducer1";
import UseReducerComplex from "./UseReducer/UseReducerComplext.jsx";
class HookMain extends React.Component {
  render() {
    return (
      <div>
        <UseReducer1 />
        <UseReducerComplex />
      </div>
    );
  }
}

export default HookMain;
