import React, { createContext, useReducer } from "react";

const initialState = {
  error: { state: false, msg: "" },
  success: { state: false, msg: "" },
};

const UIContext = createContext({
  error: null,
  success: null,
  setError: (error) => {},
  setSuccess: (success) => {},
});

const UIReducer = (state, action) => {
  switch (action.type) {
    case "SET_ERROR":
      return { ...state, error: action.payload };
    case "SET_SUCCESS":
      return { ...state, success: action.payload };
    default:
      return state;
  }
};
const UIProvider = (props) => {
  const [state, dispatch] = useReducer(UIReducer, initialState);
  const setError = (error) => {
    dispatch({
      type: "SET_ERROR",
      payload: error,
    });
  };
  const setSuccess = (success) => {
    dispatch({
      type: "SET_SUCCESS",
      payload: success,
    });
  };
  return (
    <UIContext.Provider
      value={{
        error: state.error,
        success: state.success,
        setError,
        setSuccess,
      }}
      {...props}
    />
  );
};
export { UIContext, UIProvider };
