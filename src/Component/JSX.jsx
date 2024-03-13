import React from "react";

const JSX = () => {
  // return (
  //   <div>
  //     <h1>With JSX</h1>
  //   </div>
  // );

  const element = React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Without JSX"),
  );
  return element;
};

export default JSX;
