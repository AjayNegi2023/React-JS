import React, { Component, useState, useEffect } from "react";
import MemorizedComponent from "./MemorizedComponent";
import RegulareComponent from "./RegularComponent";
const MemoApp = () => {
  const [name, setName] = useState("Yash");

  useEffect(() => {
    const interval = setInterval(() => {
      setName("Yash");
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  console.log("Memo App Parent ");
  return (
    <div>
      <MemorizedComponent name={name} />
      <RegulareComponent name={name} />
    </div>
  );
};

export default MemoApp;
