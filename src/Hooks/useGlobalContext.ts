import { createContext, useContext } from "react";

export type GlobalContent = {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
  user: string;
  setUser: (user: string) => void;
};

export const GlobalContext = createContext<GlobalContent>({
  loggedIn: false,
  user: "",
  setLoggedIn: () => {},
  setUser: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
