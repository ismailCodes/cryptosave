import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function Hero() {
  return (
    <div className="flex absolute w-full px-4 top-0 pt-24 h-screen flex-col items-center justify-start lg:mt-10">
      <h1 className="text-4xl lg:text-5xl xl:text-8xl font-black text-zinc-50 mb-4 text-center tracking-wider">
        Make your crypto Saving easier
      </h1>
      <p className="text-xl lg:text-xl text-zinc-100 mt-3 text-center lg:text-center">
        A decentralized, open-source, and free platform for saving crypto.
      </p>
      <div className="flex items-center mt-8">
        <PrimaryButton buttonText="Get started" _style="mt-4 lg:mt-0 mx-3" />
        <SecondaryButton buttonText="Watch Video" _style="mt-4 lg:mt-0 mx-3" />
      </div>
      <div className="absolute bottom-10 w-[120px] h-[40%] md:w[150] md:h-[300px] lg:w-[110px] lg:h-[270px] xl:w-[150px] xl:h-[360px] 2xl:w-[180px] 2xl:h-[500px] 2xl:text-9xl transform rotate-180">
        <Image src="/images/save.png" layout="fill" />
      </div>
    </div>
  );
}
