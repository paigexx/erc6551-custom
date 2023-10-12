require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      chainId: 1337,
    },
      goerli: {
        url: `${process.env.ALCHEMY_GOERLI_URL}`,
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      }, 
      celo: {
        url: "https://forno.celo.org",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
        chainId: 42220
      }, 
      alfajores: {
        url: "https://alfajores-forno.celo-testnet.org",
        accounts: [`0x${process.env.PRIVATE_KEY}`],
        chainId: 44787
      },       polygon_mumbai: {
        chainId: 80001,
        url: process.env.ALCHEMY_MUMBAI_URL,
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },      zkEVM: {
        url: `https://rpc.public.zkevm-test.net`,
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },      arbitrum_goerli: {
        url: process.env.ALCHEMY_ARBITRUM_URL,
        accounts: [`0x${process.env.PRIVATE_KEY}`]}
  
  }
};
