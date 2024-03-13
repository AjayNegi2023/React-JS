import React, { useState } from "react";
import HOC from "./HOC";

const HoverCounter = (props) => {
  const {count , increment }= props
  return (
    <div>
      <h1>{props.name}</h1>
      <h3 onMouseOver={() => increment()}> Hover {count}</h3>
    </div>
  );
};

export default HOC(HoverCounter);
