import React, { useReducer } from "react";
import { Button, Typography } from "@mui/material";
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{state}</h2>
      <Button
        variant="contained"
        onClick={() => dispatch("increment")}
        color="inherit"
      >
        Increment
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch("decrement")}
        color="success"
      >
        DEcrement
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch("reset")}
        color="error"
      >
        Reset
      </Button>
    </div>
  );
};
export default UseReducer1;
