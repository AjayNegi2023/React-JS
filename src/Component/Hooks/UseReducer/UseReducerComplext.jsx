import React, { useReducer } from "react";
import { Button, Typography } from "@mui/material";
const initialState = {
  count: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
const UseReducerComplex = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>{state.count}</h2>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "increment" })}
        color="inherit"
      >
        Increment
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "decrement" })}
        color="success"
      >
        DEcrement
      </Button>
      <Button
        variant="contained"
        onClick={() => dispatch({ type: "reset" })}
        color="error"
      >
        Reset
      </Button>
    </div>
  );
};
export default UseReducerComplex;
