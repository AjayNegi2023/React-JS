import React, { useState, useRef } from "react";

const SyntheticsEvent = () => {
  const [name, setName] = useState("");
  const [clientX, setClientX] = useState(0);
  const [clientY, setClientY] = useState(0);
  const inputRef = useRef();

  const handleInput = (event) => {
    setName(event.target.value);
    // console.log(name);
  };

  const clickHandler = () => {
    alert(`HII ${inputRef.current.value}`);
    console.log(name);
  };

  const mouseHandler = (event) => {
    setClientX(event.clientX);
    setClientY(event.clientY);
  };
  return (
    <div>
      <h2 onMouseOver={(event) => mouseHandler(event)}>
        CLientX {clientX} ClientY : {clientY}
      </h2>
      <input type="text" onChange={(e) => handleInput(e)} ref={inputRef} />
      <button onClick={() => clickHandler()}>Get Name </button>
    </div>
  );
};

export default SyntheticsEvent;
