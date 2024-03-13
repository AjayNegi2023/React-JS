import React from "react";

const UserContext = React.createContext();
const DetailContext = React.createContext();
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserContext, UserProvider, UserConsumer, DetailContext };
