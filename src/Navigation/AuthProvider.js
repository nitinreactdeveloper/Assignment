import React, {
  useState,
  useEffect,
  createContext,
  useReducer,
  useCallback,
} from 'react';
const AuthContext = createContext();
const AuthProivder = ({children}) => {
  return (
    <>
      <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
    </>
  );
};
export {AuthProivder, AuthContext};
