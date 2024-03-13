import React, { useState } from "react";
import HOC from "./HOC";

const ClickCounter = (props) => {
  const {count , increment }= props
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>Count : {count}</h2>
      <button onClick={() => increment()}>Click Here </button>
    </div>
  );
};

export default HOC(ClickCounter);
