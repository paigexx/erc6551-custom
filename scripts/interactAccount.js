const { TokenboundClient } = require("@tokenbound/sdk");
const { toNumber } = require("ethers");
const {ethers} = require("hardhat");
require("dotenv").config();
const artifact = require("../artifacts/contracts/ERC6551Account.sol/ERC6551Account.json")

async function main() {
    //Testnet implementation
//     const provider = new ethers.AlchemyProvider(
//         "goerli",
//         process.env.ALCHEMY_GOERLI_API_KEY
//       );
//     const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
//     const tokenboundClient = new TokenboundClient({ 
//         walletClient: signer, 
//         chainId: toNumber(process.env.CHAIN_ID),    
//         implementationAddress: process.env.ERC6551ACOUNT_ADDRESS,
//         registryAddress: process.env.ERC6551REGISTRY_ADDRESS 
//     });
    
//     const tokenBoundAccount = tokenboundClient.getAccount({
//         tokenContract: process.env.MYTOKEN_ADDRESS,
//         tokenId: process.env.TOKEN_ID,
//     })
//  console.log(tokenBoundAccount)
    // tba = new ethers.Contract(tokenBoundAccount, artifact.abi, signer)



    //Localhost implementation (hardhat node)
    const [signer, account] = await ethers.getSigners();
    //Note, insert the token bound account address printed in the CLI for the first parameter.
    tba = new ethers.Contract("0x884D5048F0c336E863Fe774E723aF96eb5991F87", artifact.abi, signer)


    const newName = ethers.encodeBytes32String("Pinnie's Savings Account")
    const tx =  await tba.setAccountName(newName);
    await tx.wait();
    const accountName =  await tba.getAccountName();
    console.log("New Account Name: ", ethers.decodeBytes32String(accountName))


  }
  
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
  
  