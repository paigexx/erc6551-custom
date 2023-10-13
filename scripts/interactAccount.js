const {ethers} = require("hardhat");
require("dotenv").config();
const artifact = require("../artifacts/contracts/ERC6551Account.sol/ERC6551Account.json")

async function main() {
    const provider = new ethers.AlchemyProvider(
        "goerli",
        process.env.ALCHEMY_GOERLI_API_KEY
      );
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    //insert your TBA address here from createAccount.js
    const tokenBoundAccount = "0xB123036E3d67edCa297a6fa9f096B645F4402Af5"
    const tba = new ethers.Contract(tokenBoundAccount, artifact.abi, signer)

    //Localhost implementation (hardhat node)
    // const [signer, account] = await ethers.getSigners();

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
  
  