import { FunctionComponent } from "react";
import FeatherIcon from "feather-icons-react";
import Countdown from "react-countdown";
import useSave from "../Hooks/useSave";

interface IProps {
  balance: string;
  endTime: number;
  setIsModalOpen: (isOpen: boolean) => void;
}

const BalanceBox: FunctionComponent<IProps> = ({
  balance,
  endTime,
  setIsModalOpen,
}) => {
  const { withdrawAll } = useSave();
  return (
    <div className="w-full md:w-80 rounded-md h-36 px-5 py-3 flex flex-col justify-between items-center bg-gray-900 text-gray-100">
      <div className="w-full items-center">
        <div className="flex justify-between w-full">
          <div className="text-md">Ethereum</div>
          <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <FeatherIcon icon="plus-square" fill="black" />
          </div>
        </div>
        <div className="text-2xl text-center">{balance} ETH</div>
      </div>
      {endTime && Date.now() - endTime < 0 ? (
        <div className="w-full flex justify-between">
          <div>Remaining:</div>
          <Countdown date={new Date(endTime)}></Countdown>
        </div>
      ) : (
        Number(balance) !== 0 && (
          <button onClick={() => withdrawAll()}>Withdraw</button>
        )
      )}
    </div>
  );
};

export default BalanceBox;
