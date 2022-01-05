import { config as dotenvConfig } from "dotenv";
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomiclabs/hardhat-ethers";
import { resolve } from "path";

dotenvConfig({ path: resolve(__dirname, "./.env.local") });

// Ensure that we have all the environment variables we need.
const infuraId: string | undefined = process.env.INFURA_ID;
if (!infuraId) {
  throw new Error("Please set your Infura Id in a .env file");
}

const accountPkey: string | undefined = process.env.ACCOUNT_PKEY;
if (!accountPkey) {
  throw new Error("Please set your Account Private Key in a .env file");
}

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.10",
  },
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraId}`,
      accounts: [accountPkey],
    },
  },
};

export default config;
