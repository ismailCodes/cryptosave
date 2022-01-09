import { FunctionComponent } from "react";
import FeatherIcon from "feather-icons-react";

const HowTo: FunctionComponent = () => {
  return (
    <div
      id="how-to"
      className="bg-zinc-900 w-screen overflow-hidden flex justify-center items-center py-10 lg:pb-48 lg:pt-28 flex-wrap"
    >
      <div className="w-11/12 lg:w-80 relative aspect-square bg-gradient-to-br from-indigo-900 to-blue-800 rounded-2xl rounded-tr-[50px] mx-5 shadow-xl shadow-blue-500/5 px-8 py-2 border border-zinc-50/5 mt-20">
        <div className="absolute -left-[3px] top-10 bg-zinc-50 h-28 w-[6px] rounded-full"></div>
        <div className="flex justify-between">
          <FeatherIcon
            icon="credit-card"
            stroke="white"
            size={80}
            strokeWidth={0.4}
            style={{ marginTop: "30px" }}
          />
          <div className="text-8xl font-black text-zinc-50 opacity-5">01</div>
        </div>
        <div className="font-semibold text-zinc-50 text-xl mt-2">
          Connect your wallet
        </div>
        <div className="h-[1px] bg-zinc-50 w-24 mt-4 mb-2"></div>
        <div className="text-zinc-50 text-md font-light">
          We only detect your wallet address to fetch your balance. We do not
          access the wallet or perform any operation with it.
        </div>
      </div>

      <div className="w-11/12 lg:w-80 relative aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl rounded-tr-[50px] mx-5 shadow-xl shadow-zinc-200/5 px-8 py-2 border border-zinc-50/5 mt-20">
        <div className="absolute -left-[3px] top-10 bg-blue-500 h-28 w-[6px] rounded-full"></div>
        <div className="flex justify-between">
          <FeatherIcon
            icon="edit"
            stroke="white"
            size={80}
            strokeWidth={0.4}
            style={{ marginTop: "30px" }}
          />
          <div className="text-8xl font-black text-zinc-50 opacity-5">02</div>
        </div>

        <div className="font-semibold text-zinc-50 text-xl mt-2">
          Choose your limits
        </div>
        <div className="h-[1px] bg-zinc-50 w-24 mt-4 mb-2"></div>
        <div className="text-zinc-50 text-md font-light">
          Choose how much you want to save for how long.
        </div>
      </div>

      <div className="w-11/12 lg:w-80 relative aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl rounded-tr-[50px] mx-5 shadow-xl shadow-zinc-200/5 px-8 py-2 border border-zinc-50/5 mt-20">
        <div className="absolute -left-[3px] top-10 bg-blue-500 h-28 w-[6px] rounded-full"></div>
        <div className="flex justify-between">
          <FeatherIcon
            icon="lock"
            stroke="white"
            size={80}
            strokeWidth={0.4}
            style={{ marginTop: "30px" }}
          />
          <div className="text-8xl font-black text-zinc-50 opacity-5">03</div>
        </div>
        <div className="font-semibold text-zinc-50 text-xl mt-2">
          Deposit your funds
        </div>
        <div className="h-[1px] bg-zinc-50 w-24 mt-4 mb-2"></div>
        <div className="text-zinc-50 text-md font-light">
          Deposit your savings into cryptosave and wait for withdrawal time.
        </div>
      </div>

      <div className="relative aspect-square bg-transparent rounded-2xl">
        <div className="w-11/12 lg:w-80 relative aspect-square bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl rounded-tr-[50px] mx-5 shadow-xl shadow-zinc-200/5 px-8 py-2 border border-zinc-50/5 mt-20 z-50">
          <div className="flex justify-between">
            <FeatherIcon
              icon="dollar-sign"
              stroke="white"
              size={80}
              strokeWidth={0.4}
              style={{ marginTop: "30px" }}
            />
            <div className="text-8xl font-black text-zinc-50 opacity-5">04</div>
          </div>
          <div className="font-semibold text-zinc-50 text-xl mt-2">
            Withdraw your funds
          </div>
          <div className="h-[1px] bg-zinc-50 w-24 mt-4 mb-2"></div>
          <div className="text-zinc-50 text-md font-light">
            Withdraw your savings to your wallet, and enjoy your earnings
            (coming soon).
          </div>
          <div className="absolute -left-[3px] top-10 bg-blue-500 h-28 w-[6px] rounded-full"></div>
        </div>
        <div className="w-11/12 lg:w-80 absolute top-3 left-3 aspect-square bg-gradient-to-br from-indigo-900 to-blue-800 rounded-3xl rounded-tr-[50px] mx-5 mt-20 hidden md:block"></div>
      </div>
    </div>
  );
};

export default HowTo;
