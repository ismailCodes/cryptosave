// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

// const hre = require("hardhat");

async function main() {
  const MoneySaver = await ethers.getContractFactory("MoneySaver");
  const moneySaver = await MoneySaver.deploy();

  await moneySaver.deployed();

  console.log("Money Saver deployed to:", moneySaver.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
