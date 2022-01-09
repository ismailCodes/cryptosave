import Image from "next/image";
import CercleButton from "./CercleButton";

export default function Hero() {
  return (
    <div className="flex absolute w-full md:w-8/12 lg:w-6/12 px-4 top-0 pt-24 h-screen flex-col items-center justify-start mt-2 lg:mt-10">
      <div
        className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-br from-zinc-200/20 via-transparent
                      to-transparent rounded-full absolute -left-[30px] -top-[70px] md:-left-[250px] md:-top-[100px]
                      lg:-left-[750px] lg:-top-[130px]"
      ></div>
      <h1 className="text-4xl lg:text-5xl xl:text-7xl font-black text-zinc-50 mb-4 text-center tracking-wider">
        Make your crypto Saving easier
      </h1>
      <p className="text-xl lg:text-xl text-zinc-100 mt-3 text-center lg:text-center">
        A decentralized, open-source, and free platform for saving crypto.
      </p>
      <a href="#how-to" className="flex lg:justify-center w-full mt-8">
        <CercleButton buttonText="Get started" />
      </a>
      <div
        className="absolute bottom-0 lg:bottom-10 w-[120px] h-[40%] md:w[150] 
                      md:h-[300px] lg:w-[110px] lg:h-[270px] xl:w-[150px] xl:h-[360px] 2xl:w-[180px]
                      2xl:h-[500px] 2xl:text-9xl transform rotate-180"
      >
        <div className="w-full h-full absolute bg-gradient-to-b from-zinc-900 via-zinc-900/30 to-transparent z-50"></div>
        <Image src="/images/save.png" layout="fill" />
      </div>
    </div>
  );
}
