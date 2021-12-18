import { useGlobalContext } from "./useGlobalContext";

export default function useAccount() {
  const { setLoggedIn, setUser } = useGlobalContext();
  async function getAccount() {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts[0]);
    setUser(accounts[0]);
    setLoggedIn(true);
  }

  return getAccount;
}
