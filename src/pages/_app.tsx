import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalContext } from "../Hooks/useGlobalContext";
import { useEffect, useState } from "react";
import useWeb3 from "../Hooks/useWeb3";

function MyApp({ Component, pageProps }: AppProps) {
  const web3Utils = useWeb3();

  return (
    <GlobalContext.Provider value={web3Utils}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
