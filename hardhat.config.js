require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();


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
      polygon_mumbai: {
        chainId: 80001,
        url: process.env.ALCHEMY_MUMBAI_URL,
        accounts: [`0x${process.env.PRIVATE_KEY}`],
      },  
  }, 
  defaultNetwork: "hardhat",
};
