export interface IAction {
  type: "SET_TX_HAS_STARTED" | "SET_TX_IS_FINISHED" | "SET_TX_ERROR";
  payload?: Partial<ITransaction>;
}

export interface ITransaction {
  hasStarted: boolean;
  isFinished: boolean;
  transactionHash: string;
  blockHash: string;
  amount: string;
  isError: boolean;
  errorMessage: string;
  errorCode: number;
}

export interface IWithdraw {
  hasStarted: boolean;
  hasEnded: boolean;
  isError: boolean;
  errorMessage: string;
  transactionHash: string;
  blockHash: string;
}
