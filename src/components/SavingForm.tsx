import { FunctionComponent, useEffect, useReducer, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useGlobalContext } from "../Hooks/useGlobalContext";
import useSave from "../Hooks/useSave";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FeatherIcon from "feather-icons-react";
import SecondaryButton from "./SecondaryButton";
import TxDetail from "./TxDetail";
import PrimaryButton from "./PrimaryButton";
import { useRouter } from "next/router";
import { IAction, ITransaction } from "../interfaces";
import TxStartedModal from "./TxStartedModal";
import TxErrorModal from "./TxErrorModal";
import TxFinishedModal from "./TxFinishedModal";

const schema = yup.object().shape({
  amount: yup.number().required(),
  days: yup.number().required(),
});

type Inputs = {
  amount: string;
  days: string;
};

interface Props {
  setIsModalOpen: (isOpen: boolean) => void;
  setLastTx: (tx: string) => void;
}

const transactionInitialState: ITransaction = {
  hasStarted: false,
  isFinished: false,
  transactionHash: "",
  blockHash: "",
  amount: "",
  isError: false,
  errorMessage: "",
  errorCode: 0,
};

const SavingForm: FunctionComponent<Props> = ({
  setIsModalOpen,
  setLastTx,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({ resolver: yupResolver(schema) });

  const { address } = useGlobalContext();

  const { deposit } = useSave();

  const router = useRouter();

  const transactionReducer = (state, action: Partial<IAction>) => {
    switch (action.type) {
      case "SET_TX_HAS_STARTED":
        return {
          ...state,
          hasStarted: true,
        };
      case "SET_TX_IS_FINISHED":
        setLastTx(action.payload.transactionHash);
        return {
          ...state,
          isFinished: true,
          transactionHash: action.payload?.transactionHash,
          blockHash: action.payload?.blockHash,
          amount: action.payload.amount,
        };
      case "SET_TX_ERROR":
        return {
          ...state,
          hasStarted: false,
          isFinished: false,
          isError: true,
          errorMessage: action.payload.errorMessage,
          errorCode: action.payload.errorCode,
        };
      default:
        return state;
    }
  };
  const [transaction, dispatch] = useReducer(
    transactionReducer,
    transactionInitialState
  );

  const onSubmit: SubmitHandler<Inputs> = async ({ amount, days }) => {
    if (address) {
      dispatch({ type: "SET_TX_HAS_STARTED" });
      const tx = await deposit(amount, days);

      if (tx.success) {
        dispatch({
          type: "SET_TX_IS_FINISHED",
          payload: { ...tx.receipt, amount },
        });
        reset();
      } else {
        dispatch({
          type: "SET_TX_ERROR",
          payload: {
            errorMessage: tx.message,
            errorCode: tx.code,
          },
        });
      }
    }
  };

  //if user has balannce do nott tshow days input

  return (
    <>
      {transaction.isError && (
        <TxErrorModal
          errorMessage={transaction.errorMessage}
          onCloseAction={setIsModalOpen}
        />
      )}
      {transaction.hasStarted &&
        !transaction.isFinished &&
        !transaction.isError && (
          <TxStartedModal onCloseAction={setIsModalOpen} />
        )}
      {!transaction.hasStarted &&
        !transaction.isFinished &&
        !transaction.isError && (
          <>
            <div className="w-full flex flex-col pb-2 px-3 justify-centertext-gray-500">
              <div className="text-2xl text-gray-800">Deposit crypto</div>
            </div>
            <form
              className="w-full flex flex-col"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full my-2 flex justify-between">
                <input
                  className="w-2/3 px-2 py-1 outline-none rounded-md border border-gray-300 text-md"
                  type="text"
                  placeholder="Amount of ether"
                  {...register("amount", { required: true })}
                />
                <input
                  className="w-1/4 px-2 py-1 outline-none rounded-md border border-gray-300 text-md"
                  type="text"
                  placeholder="Days"
                  {...register("days", { required: true })}
                />
              </div>
              {errors.amount && (
                <span className="text-sm text-red-500">
                  * {errors.amount.message.split(",")[0]}
                </span>
              )}
              {errors.days && (
                <span className="text-sm text-red-500">
                  * {errors.days.message.split(",")[0]}
                </span>
              )}

              <div className="flex justify-between items-center">
                <SecondaryButton
                  buttonText="Cancel"
                  action={() => setIsModalOpen(false)}
                  _style="w-1/2 mr-2"
                />
                <button className="w-1/2 bg-gray-900 text-gray-50 rounded-md my-3 py-2">
                  Deposit
                </button>
              </div>
            </form>
          </>
        )}
      {transaction.isFinished && (
        <TxFinishedModal
          onCloseAction={setIsModalOpen}
          transactionHash={transaction.transactionHash}
          blockHash={transaction.blockHash}
          amount={transaction.amount}
        />
      )}
    </>
  );
};

export default SavingForm;
