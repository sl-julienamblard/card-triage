import { type FC, createContext, useReducer, PropsWithChildren } from "react";

import { reducer } from "./reducer";
import { initialStore } from "./store";

export const Context = createContext({});

export const Provider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Context.Provider value={useReducer(reducer, initialStore)}>
      {children}
    </Context.Provider>
  );
};
