import "../../styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalContext } from "../Hooks/useGlobalContext";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <GlobalContext.Provider value={{ user, setUser, loggedIn, setLoggedIn }}>
      <Component {...pageProps} />
    </GlobalContext.Provider>
  );
}

export default MyApp;
