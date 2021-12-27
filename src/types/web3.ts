export type Web3StateType = {
  provider?: any;
  web3Provider?: any;
  address?: string;
  chainId?: number;
};

export type Web3ActionType =
  | {
      type: "SET_WEB3_PROVIDER";
      provider?: Web3StateType["provider"];
      web3Provider?: Web3StateType["web3Provider"];
      address?: Web3StateType["address"];
      chainId?: Web3StateType["chainId"];
    }
  | {
      type: "SET_ADDRESS";
      address?: Web3StateType["address"];
    }
  | {
      type: "SET_CHAIN_ID";
      chainId?: Web3StateType["chainId"];
    }
  | {
      type: "RESET_WEB3_PROVIDER";
    };
