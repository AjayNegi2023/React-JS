import React, { useState } from "react";

const ClickCounter = (props) => {
  const {count , increment}=props;
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => increment()}>Click Here </button>
    </div>
  );
};

export default ClickCounter;
