import type { NextPage } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import useSave from "../Hooks/useSave";
import { useEffect } from "react";
import useAccount from "../Hooks/useAccount";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import { ethers } from "ethers";

const Saver: NextPage = () => {
  const { fetchBalance, deposit } = useSave();
  const { user, loggedIn } = useGlobalContext();
  const { login, logout } = useAccount();

  return (
    <div className="flex flex-col">
      <div className="flex justify-around mb-10">
        <button
          className="bg-yellow-400/70 text-gray-800 px-10 py-3 cursor-pointer rounded-lg mx-2"
          onClick={async () => {
            const x = await deposit(1671618024);
            console.log({ x });
          }}
        >
          Deposit
        </button>
        <button
          className="bg-yellow-400/70 text-gray-800 px-10 py-3 cursor-pointer rounded-lg mx-2"
          onClick={async () => {
            const balance = await fetchBalance(user);
            console.log({
              balance: ethers.utils.formatEther(balance?.balance || 0),
            });
          }}
        >
          get balance
        </button>
        <button
          className="bg-yellow-400/70 text-gray-800 px-10 py-3 cursor-pointer rounded-lg mx-2"
          onClick={async () => {
            const account = await login();
          }}
        >
          connect
        </button>
        <button
          className="bg-yellow-400/70 text-gray-800 px-10 py-3 cursor-pointer rounded-lg mx-2"
          onClick={async () => {
            const account = await logout();
          }}
        >
          logout
        </button>
      </div>

      <div>
        <pre>{JSON.stringify({ user, loggedIn }, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Saver;
