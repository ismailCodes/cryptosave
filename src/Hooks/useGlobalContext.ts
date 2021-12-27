import { providers } from "ethers";
import { createContext, useContext } from "react";

export type GlobalContent = {
  connect: () => void;
  disconnect: () => void;
  address: string;
  web3Provider: providers.Web3Provider;
};

export const GlobalContext = createContext<GlobalContent>({
  connect: () => {},
  disconnect: () => {},
  address: "",
  web3Provider: null,
});

export const useGlobalContext = () => useContext(GlobalContext);
