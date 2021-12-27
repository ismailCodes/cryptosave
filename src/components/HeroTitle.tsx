import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import StepItem from "./StepItem";
import useWeb3 from "../Hooks/useWeb3";

const HeroTitle: FunctionComponent = () => {
  const router = useRouter();
  const { loggedIn } = useGlobalContext();
  const { connect, disconnect, address, web3Provider } = useWeb3();

  return (
    <div
      className="w-full md:w-3/4 lg:w-10/12
     h-full absolute flex flex-col lg:justify-center px-5 md:pb-16 lg:pb-0"
    >
      <div className="w-full h-full lg:h-auto flex flex-col lg:flex-row justify-end lg:justify-between lg:items-center">
        <div className="text-xl lg:text-xl font-medium flex flex-col">
          <div className="text-5xl lg:text-6xl font-black text-white leading-relaxed first-letter:text-yellow-400">
            Save
          </div>
          is your Free crypto-saving Jar
          <button
            className="bg-yellow-400 text-black px-4 text-base py-2 mt-4 mb-12 lg:w-40 hidden lg:block"
            onClick={
              web3Provider
                ? () => {
                    router.push("/profile ");
                  }
                : connect
            }
          >
            {!web3Provider ? "Get a free Jar" : "Go to profile"}
          </button>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 text-2xl first-letter:text-6xl first-letter:font-extrabold justify-center mt-8 lg:mt-0 pl-auto">
          <StepItem step={1} text="Connect your wallet" />
          <StepItem step={2} text="Choose an amount" />
          <StepItem step={3} text="Set a withdraw date" />
          <StepItem step={4} text="Deposit your Savings" />
        </div>
      </div>
      <button
        className="bg-yellow-400 text-black px-10 py-2 mt-4 mb-12 lg:hidden"
        onClick={
          loggedIn
            ? () => {
                router.push("/profile ");
              }
            : connect
        }
      >
        {!web3Provider ? "Get a free Jar" : "Go to profile"}
      </button>
    </div>
  );
};

export default HeroTitle;
