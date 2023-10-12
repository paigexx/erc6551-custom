const hre = require("hardhat");
require("dotenv").config();

async function main() {
  // Get the contract instance
  const MyToken = await ethers.getContractFactory("MyToken");
  const myToken = await MyToken.attach(process.env.MYTOKEN_ADDRESS);
  tokenId = await myToken.nextId()
  const mintToAddress = process.env.WALLET_ADDRESS;

  // Mint tokens
  const tx = await myToken.mint(mintToAddress, "");

  // Wait for the transaction to be mined
  const receipt = await tx.wait();

  // Log the transaction details
  console.log("Transaction hash:", receipt.hash);
  console.log("Gas used:", receipt.cumulativeGasUsed);

  // Check if the transaction was successful (status 1)
  if (receipt.status === 1) {
    console.log(`Transaction was successful. Token ${tokenId} minted to ${mintToAddress}`);
  } else {
    console.log("Transaction failed.");
  }

}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});


