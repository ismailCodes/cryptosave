import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalContext } from "../Hooks/useGlobalContext";
import { useCallback, useEffect, useReducer } from "react";
import useWeb3 from "../Hooks/useWeb3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { Web3ActionType, Web3StateType } from "../types/web3";
import { providers } from "ethers";

const Web3InitialState: Web3StateType = {
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
};

function MyApp({ Component, pageProps }: AppProps) {
  const [state, dispatch] = useReducer(Web3Reducer, Web3InitialState);
  const { provider, web3Provider, address, chainId } = state;

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
      },
    },
  };

  let web3Modal: Web3Modal;

  if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
      network: "mainnet",
      cacheProvider: true,
      providerOptions,
    });
  }

  function Web3Reducer(
    state: Web3StateType,
    action: Web3ActionType
  ): Web3StateType {
    switch (action.type) {
      case "SET_WEB3_PROVIDER":
        return {
          ...state,
          provider: action.provider,
          web3Provider: action.web3Provider,
          address: action.address,
          chainId: action.chainId,
        };
      case "SET_ADDRESS":
        return {
          ...state,
          address: action.address,
        };
      case "SET_CHAIN_ID":
        return {
          ...state,
          chainId: action.chainId,
        };
      case "RESET_WEB3_PROVIDER":
        return Web3InitialState;
      default:
        throw new Error();
    }
  }

  const connect = useCallback(async function () {
    const provider = await web3Modal.connect();

    const web3Provider = new providers.Web3Provider(provider);

    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();

    console.log({ address });

    const network = await web3Provider.getNetwork();

    dispatch({
      type: "SET_WEB3_PROVIDER",
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
    });
  }, []);

  const disconnect = useCallback(
    async function () {
      await web3Modal.clearCachedProvider();
      if (provider?.disconnect && typeof provider.disconnect === "function") {
        await provider.disconnect();
      }
      dispatch({
        type: "RESET_WEB3_PROVIDER",
      });
    },
    [provider]
  );

  useEffect(() => {
    console.log("effect connect");
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  useEffect(() => {
    console.log("effect provider enter");

    if (provider?.on) {
      console.log("effect provider triggered evennt");

      const handleAccountsChanged = (accounts: string[]) => {
        // eslint-disable-next-line no-console
        console.log("accountsChanged", accounts);
        dispatch({
          type: "SET_ADDRESS",
          address: accounts[0],
        });
      };

      const handleChainChanged = (_hexChainId: string) => {
        window.location.reload();
      };

      const handleDisconnect = (error: { code: number; message: string }) => {
        // eslint-disable-next-line no-console
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider, disconnect]);

  return (
    <GlobalContext.Provider
      value={{ connect, disconnect, address, web3Provider }}
    >
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
