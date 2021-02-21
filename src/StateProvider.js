// setup data layer
// tracking basket

import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// this is how we use inside of component
export const useStateValue = () => useContext(StateContext);
