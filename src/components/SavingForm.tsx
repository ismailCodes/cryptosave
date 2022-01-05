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

interface ITransaction {
  hasStarted: boolean;
  isFinished: boolean;
  transactionHash: string;
  blockHash: string;
  amount: string;
  isError: boolean;
  errorMessage: string;
  errorCode: number;
}

interface IAction {
  type: "SET_TX_HAS_STARTED" | "SET_TX_IS_FINISHED" | "SET_TX_ERROR";
  payload?: Partial<ITransaction>;
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
        <div className="w-full flex flex-col pb-2 px-3 justify-centertext-gray-500">
          <div className="text-2xl text-gray-800">An error occured</div>
          <div className="text-md my-4 text-gray-900">
            {transaction.errorMessage}
          </div>
          <div className="flex w-full items-center justify-center">
            <SecondaryButton
              buttonText="Close"
              action={() => setIsModalOpen(false)}
              _style="w-1/2 mr-2"
            />
          </div>
        </div>
      )}
      {transaction.hasStarted &&
        !transaction.isFinished &&
        !transaction.isError && (
          <>
            <div className="w-full flex flex-col pb-2 px-3 justify-centertext-gray-500">
              <div className="text-2xl text-gray-800">
                Your transaction has started
              </div>
            </div>
            <div className="w-full h-32 flex justify-center items-center">
              <div className="animate-spin w-20 h-20 flex justify-center items-center">
                <FeatherIcon icon="loader" size="32" />
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <SecondaryButton
                buttonText="Close"
                action={() => setIsModalOpen(false)}
                _style="w-1/2 mr-2"
              />
            </div>
          </>
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
        <div className="w-full flex flex-col pb-2 px-3 justify-centertext-gray-500">
          <div className="text-2xl text-gray-800">Transaction finished</div>
          <div className="w-full flex flex-col my-4 text-gray-900">
            <TxDetail _key="Tx Hash" value={transaction.transactionHash} />
            <TxDetail _key="Block Hash" value={transaction.blockHash} />
            <TxDetail _key="Amount" value={transaction.amount} />
          </div>
          <div className="flex w-full items-center justify-between">
            <a
              target="_blank"
              className={`inline-block text-sm py-3 leading-none rounded-md text-center text-gray-800 bg-transparent border border-gray-800 w-1/2 px-2 mr-2`}
              href={`${process.env.NEXT_PUBLIC_RINKEBY_BLOCK_EXPLORER_BASE_URL}/tx/${transaction.transactionHash}`}
            >
              View on explorer
            </a>
            <PrimaryButton
              buttonText="Close"
              action={() => setIsModalOpen(false)}
              _style="w-1/2"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SavingForm;
