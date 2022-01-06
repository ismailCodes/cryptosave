export type Web3StateType = {
  provider?: any;
  web3Provider?: any;
  address?: string;
  chainId?: number;
  balance?: string;
};

export type Web3ActionType =
  | {
      type: "SET_WEB3_PROVIDER";
      provider?: Web3StateType["provider"];
      web3Provider?: Web3StateType["web3Provider"];
      address?: Web3StateType["address"];
      chainId?: Web3StateType["chainId"];
      balance: string;
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

export interface IChainData {
  name: string;
  short_name: string;
  chain: string;
  network: string;
  chain_id: number;
  network_id: number;
  rpc_url: string;
  native_currency: IAssetData;
}

export interface IAssetData {
  symbol: string;
  name: string;
  decimals: string;
  contractAddress: string;
  balance?: string;
}
