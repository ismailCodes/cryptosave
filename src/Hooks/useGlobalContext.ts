import { providers } from "ethers";
import { createContext, useContext } from "react";
import { IChainData } from "../types/web3";

export type GlobalContent = {
  connect: () => void;
  disconnect: () => void;
  address: string;
  web3Provider: providers.Web3Provider;
  chainData: IChainData;
  balance: string;
};

export const GlobalContext = createContext<GlobalContent>({
  connect: () => {},
  disconnect: () => {},
  address: "",
  web3Provider: null,
  chainData: null,
  balance: "",
});

export const useGlobalContext = () => useContext(GlobalContext);
