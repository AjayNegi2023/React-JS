import React from "react";
import ComponentA from "./ComponentA";
import { DetailContext, UserProvider } from "./Context";
import ComponentC from "./ComponentC";
import ComponentB from "./ComponentB";
import ContextFUN from "./UseContextHOOK";

class AppContext extends React.Component {
  render() {
    return (
      <div>
        {/* <ComponentA />
        <DetailContext.Provider value="Ajay">
          <UserProvider value="Negi">
            <ComponentC />
          </UserProvider>
        </DetailContext.Provider>
        <UserProvider value="Ajay">
          <ComponentB />
        </UserProvider> */}

        <DetailContext.Provider value="Ajay">
          <UserProvider value="Negi">
            <ContextFUN />
          </UserProvider>
        </DetailContext.Provider>
      </div>
    );
  }
}

export default AppContext;
