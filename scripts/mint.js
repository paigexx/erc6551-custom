require("hardhat");
require("dotenv").config();

async function main() {
  // Get the contract instance
  const Pinnie = await ethers.getContractFactory("Pinnie");
  const pinnie = await Pinnie.attach(process.env.PINNIE_ADDRESS);
  tokenId = await pinnie.nextId()
   //Replae with your IPFS hash from pinContent.js (json file)
  const baseURI = "ipfs://QmTRxBoLapSUgAiaz2FxvQYW2ektgJnhoomzaQ8Q76puvA"
 

  //Address you want to mint your NFT to
  const to = process.env.WALLET_ADDRESS
  // Mint token
  const tx = await pinnie.safeMint(to, baseURI);

  // Wait for the transaction to be mined
  const receipt = await tx.wait();

  // Log the transaction details
  console.log("Transaction hash:", receipt.hash);
  console.log("Gas used:", receipt.cumulativeGasUsed);

  // Check if the transaction was successful (status 1)
  if (receipt.status === 1) {
    console.log(`Transaction was successful. Token ${tokenId} minted to ${to}`);
  } else {
    console.log("Transaction failed.");
  }

}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});


