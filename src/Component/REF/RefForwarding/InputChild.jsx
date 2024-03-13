import React from "react";

const InputChild = React.forwardRef((props, ref) => {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  );
});

export default InputChild;
