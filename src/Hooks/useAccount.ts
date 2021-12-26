import { useGlobalContext } from "./useGlobalContext";

export default function useAccount() {
  const { setLoggedIn, setUser } = useGlobalContext();
  async function login() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts[0]);
    setUser(accounts[0]);
    setLoggedIn(true);
    localStorage.setItem("user", accounts[0]);
  }

  const logout = () => {
    setLoggedIn(false);
    setUser("");
    localStorage.removeItem("user");
  };

  return { login, logout };
}
