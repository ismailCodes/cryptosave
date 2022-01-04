import { ethers } from "ethers";
import MoneySaver from "../../artifacts/contracts/SavingContract.sol/MoneySaver.json";
import { useGlobalContext } from "./useGlobalContext";

declare const window: Window &
  typeof globalThis & {
    ethereum: any;
  };

const SavingContractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

const useSave: Function = (): {} => {
  const { connect, address } = useGlobalContext();

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

  const deposit: Function = async (
    amount: number,
    endTime: number
  ): Promise<any> => {
    console.log({ address });
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
        console.log("receipt 0");

        const transaction = await contract.deposit(endTime, {
          from: address,
          value: ethers.utils.parseEther(amount.toString()),
          gasPrice,
          gasLimit: ethers.utils.hexlify(100000),
          nonce: provider.getTransactionCount(address),
        });
        console.log("receipt 1");
        console.log({ transaction });

        const txReceipt = await transaction.wait();
        console.log("receipt 2");
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
