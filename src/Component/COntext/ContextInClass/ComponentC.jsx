import React from "react";
import { UserConsumer, DetailContext } from "./Context";
class ComponentC extends React.Component {
  render() {
    return (
      <DetailContext.Consumer>
        {(fname) => {
          return (
            <UserConsumer>
              {(lname) => {
                return <h3>Hello {fname + lname}</h3>;
              }}
            </UserConsumer>
          );
        }}
      </DetailContext.Consumer>
    );
  }
}

export default ComponentC;
