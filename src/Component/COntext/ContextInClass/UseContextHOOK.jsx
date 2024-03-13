import React, { useContext } from "react";
import { DetailContext, UserContext, UserProvider } from "./Context";

const ContextFUN = () => {
  const fname = useContext(DetailContext);
  const lname = useContext(UserContext);
  return <div>{fname + lname}</div>;
};

export default ContextFUN;
