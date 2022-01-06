import Image from "next/image";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-start mt-7 lg:mt-10">
      <h1 className="text-4xl lg:text-7xl xl:text-9xl font-black text-gray-900 mb-4 text-center tracking-wider">
        Make your crypto Saving easier
      </h1>
      <p className="text-xl lg:text-2xl text-gray-700 mt-3 text-center lg:text-center">
        A decentralized, open-source, and free platform for saving crypto.
      </p>
      <div className="flex items-center mt-8">
        <PrimaryButton buttonText="Get started" _style="mt-4 lg:mt-0 mx-3" />
        <SecondaryButton buttonText="Watch Video" _style="mt-4 lg:mt-0 mx-3" />
      </div>
      <div className="absolute bottom-0 w-[110px] h-[35%] md:w[150] md:h-[300px] lg:w-[140px] lg:h-[400px] transform rotate-180">
        <Image src="/images/save.png" layout="fill" />
      </div>
    </div>
  );
}
