import { FunctionComponent } from "react";
import FeatherIcon from "feather-icons-react";
import Countdown from "react-countdown";

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
  return (
    <div className="w-full md:w-80 rounded-md h-32 px-5 py-3 flex flex-col justify-between items-center bg-gray-900 text-gray-100">
      <div className="w-full items-center">
        <div className="flex justify-between w-full">
          <div className="text-md">Ethereum</div>
          <div className="cursor-pointer" onClick={() => setIsModalOpen(true)}>
            <FeatherIcon icon="plus-square" fill="black" />
          </div>
        </div>
        <div className="text-2xl text-center">{balance} ETH</div>
      </div>
      {endTime ? (
        <div className="w-full flex justify-between">
          <div>Remaining:</div>
          <Countdown date={new Date(endTime * 1000)}></Countdown>
          {/* <pre>{JSON.stringify(saving.endTime, null, 2)}</pre> */}
        </div>
      ) : null}
    </div>
  );
};

export default BalanceBox;
