import React, { Component } from "react";

const MemorizedComponent = (props) => {
  console.log("Memo App Memorized Component");
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default React.memo(MemorizedComponent);
