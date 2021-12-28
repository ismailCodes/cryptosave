import Image from "next/image";
import { useGlobalContext } from "../Hooks/useGlobalContext";

export default function Hero() {
  const { connect, web3Provider } = useGlobalContext();
  return (
    <div className="flex flex-col items-center justify-start mt-2 lg:mt-10">
      <h1 className="text-9xl font-black text-gray-900 mb-4 text-center tracking-wider">
        Make your crypto Saving easier
      </h1>
      <p className="text-2xl text-gray-700 mt-3">
        A decentralized, open-source, and free platform for saving your crypto
        assets.
      </p>
      <div className="flex items-center mt-8">
        <button className="inline-block text-sm px-8 py-3 leading-none rounded-md text-gray-200 bg-gray-800 mt-4 lg:mt-0 mx-3">
          Get started
        </button>
        <button
          className="inline-block text-sm px-8 py-3 leading-none rounded-md text-gray-800 bg-transparent border border-gray-800 mt-4 lg:mt-0 mx-3"
          onClick={() => console.log("watch video")}
        >
          Watch video
        </button>
      </div>
      <div className="absolute bottom-0 w-[180px] h-[45%] transform rotate-180">
        <Image src="/images/save.png" layout="fill" />
      </div>
    </div>
  );
}
