import { FunctionComponent } from "react";
import { useGlobalContext } from "../Hooks/useGlobalContext";

const NetworkBalance: FunctionComponent = () => {
  const { web3Provider, chainData, balance } = useGlobalContext();
  return web3Provider ? (
    <div className="flex flex-col text-center justify-center items-center my-3 lg:my-0 text-sm lg:mr-2">
      <div className="text-gray-50 pb-1 lg:pb-0">
        {balance} {chainData?.native_currency.symbol}
      </div>
      <div className="text-gray-50">{chainData?.name}</div>
    </div>
  ) : null;
};

export default NetworkBalance;
