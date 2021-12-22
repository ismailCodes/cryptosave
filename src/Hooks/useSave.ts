import { ethers } from "ethers";
import { EthereumProvider } from "hardhat/types";
import MoneySaver from "../../artifacts/contracts/SavingContract.sol/MoneySaver.json";
import useAccount from "./useAccount";
import { useGlobalContext } from "./useGlobalContext";

declare const window: Window &
  typeof globalThis & {
    ethereum: any;
  };

const SavingContractAddress = "0x6767C11e0A68d9a37e031979d7fF8121f308b905";

const useSave: Function = (): {} => {
  const { user } = useGlobalContext();
  const getAccount = useAccount();

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
      await getAccount();
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
          value: ethers.utils.parseEther("0.001"),
          gasPrice,
          gasLimit: 9000000,
        });
        const txReceipt = await transaction.wait();
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
