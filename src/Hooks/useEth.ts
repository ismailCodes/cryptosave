const useEth: Function = (): void => {
  //login with metamask
  async function requestAccout() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
};
