import { FunctionComponent, useReducer, useState } from "react";
import FeatherIcon from "feather-icons-react";
import Countdown from "react-countdown";
import useSave from "../Hooks/useSave";
import { IWithdraw } from "../interfaces";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import Modal from "./Modal";
import TxErrorModal from "./TxErrorModal";
import TxStartedModal from "./TxStartedModal";
import TxFinishedModal from "./TxFinishedModal";

interface IProps {
  balance: string;
  endTime: number;
  setIsModalOpen: (isOpen: boolean) => void;
  setLastTx: (tx: string) => void;
}

const withdrawReducer = (state, action) => {
  switch (action.type) {
    case "SET_TX_HAS_STARTED":
      return {
        ...state,
        hasStarted: true,
      };
    case "SET_TX_HAS_FINISHED":
      return {
        ...state,
        hasStarted: false,
        hasEnded: true,
        transactionHash: action.payload.transactionHash,
        blockHash: action.payload.blockHash,
      };
    case "SET_TX_HAS_ERROR":
      return {
        ...state,
        hasStarted: false,
        isFinished: false,
        isError: true,
        errorMessage: action.payload.errorMessage,
      };
    case "RESET_TX":
      return {
        ...withdrawalInitialState,
      };
    default:
      return state;
  }
};

const withdrawalInitialState: IWithdraw = {
  hasStarted: false,
  hasEnded: false,
  isError: false,
  errorMessage: "",
  transactionHash: "",
  blockHash: "",
};

const BalanceBox: FunctionComponent<IProps> = ({
  balance,
  endTime,
  setIsModalOpen,
  setLastTx,
}) => {
  const { address } = useGlobalContext();
  const { withdrawAll } = useSave();
  const [withdrawal, dispatch] = useReducer(
    withdrawReducer,
    withdrawalInitialState
  );
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  const handleWithdraw = async () => {
    if (address) {
      setWithdrawModalOpen(true);
      dispatch({
        type: "SET_TX_HAS_STARTED",
      });
      const tx = await withdrawAll(address);

      if (tx.success) {
        dispatch({
          type: "SET_TX_HAS_FINISHED",
          payload: { ...tx.receipt },
        });
        setLastTx(tx.receipt.transactionHash);
      } else {
        dispatch({
          type: "SET_TX_HAS_ERROR",
          payload: {
            errorMessage: tx.message,
          },
        });
      }
    }
  };

  return (
    <>
      <Modal show={withdrawModalOpen} onClose={setWithdrawModalOpen}>
        {withdrawal.isError && (
          <TxErrorModal
            errorMessage={withdrawal.errorMessage}
            onCloseAction={setWithdrawModalOpen}
            _reset={dispatch}
          />
        )}
        {withdrawal.hasStarted &&
          !withdrawal.hasEnded &&
          !withdrawal.isError && (
            <TxStartedModal onCloseAction={setWithdrawModalOpen} />
          )}
        {withdrawal.hasEnded && (
          <TxFinishedModal
            onCloseAction={setWithdrawModalOpen}
            transactionHash={withdrawal.transactionHash}
            blockHash={withdrawal.blockHash}
            amount={withdrawal.amount}
            _reset={dispatch}
          />
        )}
      </Modal>
      <div className="w-full md:w-80 rounded-md h-36 px-5 py-3 flex flex-col justify-between items-center bg-zinc-50 text-zinc-900 shadow-xl relative">
        <div className="absolute -top-[2px] right-10 h-[6px] w-20 bg-blue-600 rounded-full"></div>
        <div className="absolute transform rotate-90 -left-8 top-12 h-[6px] w-16 bg-blue-600 rounded-full"></div>
        <div className="w-full items-center">
          <div className="flex justify-between w-full">
            <div className="text-md relative">
              Ethereum{" "}
              <span className="bg-zinc-900 w-16 rounded-full absolute h-[2px] bottom-0 left-0"></span>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setIsModalOpen(true)}
            >
              <FeatherIcon icon="plus-square" fill="white" />
            </div>
          </div>
          <div className="text-2xl text-center">{balance} ETH</div>
        </div>
        {endTime && Date.now() - endTime < 0 ? (
          <div className="w-full flex justify-center">
            <Countdown date={new Date(endTime)}>
              {Number(balance) > 0 ? (
                <button onClick={handleWithdraw}>Withdraw</button>
              ) : null}
            </Countdown>
          </div>
        ) : (
          <>
            {Number(balance) > 0 ? (
              <button onClick={() => handleWithdraw()}>Withdraw</button>
            ) : null}
          </>
        )}
      </div>
    </>
  );
};

export default BalanceBox;
