import { ethers } from "ethers";
import MoneySaver from "../../artifacts/contracts/SavingContract.sol/MoneySaver.json";
import { useGlobalContext } from "./useGlobalContext";

declare const window: Window &
  typeof globalThis & {
    ethereum: any;
  };

const GAS_LIMIT = 3000000;
const SavingContractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

const useSave: Function = (): {} => {
  const { connect, address } = useGlobalContext();

  const fetchBalance: Function = async (address: string): Promise<any> => {
    if (!address) return;
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.JsonRpcProvider(
        `https://rinkeby.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`
      );
      const contract = new ethers.Contract(
        SavingContractAddress,
        MoneySaver.abi,
        provider
      );
      try {
        const balance = await contract.balances(
          ethers.utils.getAddress(address)
        );
        return balance;
      } catch (error) {
        console.log({ error });
        return 0;
      }
    }
  };

  const deposit: Function = async (
    amount: number,
    endTime: number
  ): Promise<any> => {
    if (typeof window.ethereum !== "undefined") {
      await connect();
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
          from: address,
          value: ethers.utils.parseEther(amount.toString()),
          gasPrice,
          gasLimit: ethers.utils.hexlify(GAS_LIMIT),
          nonce: provider.getTransactionCount(address),
        });

        const receipt = await transaction.wait();

        return { success: true, receipt };
      } catch ({ code, message }) {
        return { success: false, code, message };
      }
    }
  };

  const withdrawAll: Function = async (): Promise<any> => {
    if (typeof window.ethereum !== "undefined") {
      await connect();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        SavingContractAddress,
        MoneySaver.abi,
        signer
      );
      const gasPrice = await provider.getGasPrice();

      try {
        const transaction = await contract.withdrawAll({
          from: address,
          gasPrice,
          gasLimit: ethers.utils.hexlify(GAS_LIMIT),
          nonce: provider.getTransactionCount(address),
        });
        const receipt = await transaction.wait();
        return { success: true, receipt };
      } catch ({ code, message }) {
        return { success: false, code, message };
      }
    }
  };

  return { fetchBalance, deposit, withdrawAll };
};

export default useSave;
