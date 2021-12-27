import { ethers } from "ethers";
import MoneySaver from "../../artifacts/contracts/SavingContract.sol/MoneySaver.json";
import { useGlobalContext } from "./useGlobalContext";

declare const window: Window &
  typeof globalThis & {
    ethereum: any;
  };

const SavingContractAddress = "0x6767C11e0A68d9a37e031979d7fF8121f308b905";

const useSave: Function = (): {} => {
  const { user } = useGlobalContext();
  // const { login } = useAccount();

  const fetchBalance: Function = async (address: string): Promise<any> => {
    if (!address) return;
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://rinkeby.infura.io/v3/d6d638e3b25949efafa35d0991b52652"
      );
      const contract = new ethers.Contract(
        SavingContractAddress,
        MoneySaver.abi,
        provider
      );
      const signer = provider.getSigner(address);
      console.log({ signer });
      try {
        //get address balance
        const balance = await contract.balances(
          ethers.utils.getAddress(address)
        );
        // const add = await contract.deposit();
        console.log(balance.toString());
        return balance;
      } catch (error) {
        console.log({ error });
      }
    }
  };

  const deposit: Function = async (endTime: number): Promise<any> => {
    console.log({ user });
    if (typeof window.ethereum !== "undefined") {
      await login();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        SavingContractAddress,
        MoneySaver.abi,
        signer
      );
      const gasPrice = await provider.getGasPrice();

      try {
        const transaction = await contract.deposit(endTime, {
          from: user,
          value: ethers.utils.parseEther("0.0001"),
          gasPrice,
          gasLimit: ethers.utils.hexlify(100000),
          nonce: provider.getTransactionCount(user),
        });
        const txReceipt = await signer.sendTransaction(transaction);
        console.log({ txReceipt });
        return null;
      } catch (error) {
        console.log({ error });
      }
    }
  };

  return { fetchBalance, deposit };
};

export default useSave;
