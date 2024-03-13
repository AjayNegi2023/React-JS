import React, { useState } from "react";

const HoverCounter = (props) => {
  const {count , increment}=props;
return (
    <div>
      <h3 onMouseOver={() => increment()}> Hover {count}</h3>
    </div>
  );
};

export default HoverCounter;
