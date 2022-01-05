# CryptoSave (Crypto Saving Dapp)

A decentralized, open-source, and free platform for saving crypto.

Project Created Using:
- TypeScript
- NextJs
- TailwindCSS
- Hardhat
- EthersJs
- Solidity
- Web3Modal

# Want to try it out locally?

To try out this, you first need to deploy a contract to an Ethereum network, such as Mainnet, Ropsten or Rinkeby (Using Rinkeby in the .env.example file).

In this project, copy the .env.example file to a file named .env or .env.local, and then edit it to fill in the details. Enter your API key, your Rinkeby node URL, and the private key of the account which will send the deployment transaction. With a valid .env file in place, first deploy your contract:


```shell
npx hardhat run scripts/deploy.js --network rinkeby 
```

Then, copy the deployment address and paste it in to replace `NEXT_PUBLIC_CONTRACT_ADDRESS` your environment file.:

```shell
npm run dev
```

# Want to contribute?

Open Pull Requests on [Github](https://github.com/ismailCodes/cryptosave/pulls) or contact me Via Twitter: [@IsmailCodes_](https://twitter.com/IsmailCodes_)
