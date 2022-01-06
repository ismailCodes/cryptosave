import { IChainData } from "../types/web3";
import supportedChains from "./chains";

export function ellipseAddress(address = "", width = 7): string {
  if (!address) {
    return "";
  }
  return `${address.slice(0, width)}...${address.slice(-width)}`;
}

export function getChainData(chainId?: number): IChainData {
  if (!chainId) {
    return null;
  }
  const chainData = supportedChains.filter(
    (chain: any) => chain.chain_id === chainId
  )[0];

  if (!chainData) {
    throw new Error(`Chain ID ${chainId} is not supported`);
  }
  return chainData;
}
