import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  token: localStorage.getItem("token") || null,
  userId: localStorage.getItem("userId") || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("token", state.token);
    localStorage.setItem("userId", state.userId);
  }, [state.token, state.userId]);

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        userId: state.userId,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
