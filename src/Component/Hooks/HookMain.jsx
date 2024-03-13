import React from "react";
import UseReducer1 from "./UseReducer/UseReducer1";
import UseReducerComplex from "./UseReducer/UseReducerComplext.jsx";
import MainCallBack from "./PerformanceOptimization/UseCallBack/MainCallBack.jsx";
class HookMain extends React.Component {
  render() {
    return (
      <div>
        {/* <UseReducer1 />
        <UseReducerComplex /> */}

        {/* Performance Optimization  */}

        <MainCallBack />
      </div>
    );
  }
}

export default HookMain;
