import React, { Component } from "react";

const RegularComponent = (props) => {
  console.log("Memo App Regular Component");
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default RegularComponent;
