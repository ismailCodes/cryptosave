import { ethers } from "hardhat";

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
