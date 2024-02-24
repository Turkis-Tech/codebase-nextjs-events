"use client";
import React, { createContext, useReducer } from "react";
import type { TAction, TAppState } from "../types/App";

// Define the initial state
const initialState: TAppState = {
  theme: "light",
};

// Define the reducer function
const reducer = (state: TAppState, action: TAction) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

// Create the theme context
export const AppContext = createContext(null);

// Create a provider component for the theme context
export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Function to toggle the theme
  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  // Provide the theme and toggleTheme function to the children components
  return (
    <AppContext.Provider value={{ state, toggleTheme }}>
      {children}
    </AppContext.Provider>
  );
};
