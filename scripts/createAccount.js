require("hardhat");
require("dotenv").config();
const crypto = require("crypto");

async function generateRandomSalt(lengthInBytes) {
    const salt = crypto.randomBytes(lengthInBytes);
    return BigInt("0x" + salt.toString("hex"));
}

async function main() {
  const Registry = await ethers.getContractFactory("ERC6551Registry");
  const registry = await Registry.attach(process.env.ERC6551REGISTRY_ADDRESS);
  const saltLength = 16; 
  const salt = await generateRandomSalt(saltLength);  const implementation = process.env.ERC6551ACOUNT_ADDRESS
  const tokenAddress = process.env.PINNIE_ADDRESS;
  const tokenId = process.env.TOKEN_ID
  const chainID = process.env.CHAIN_ID
  const initData = "0x";

  const tx = await registry.createAccount(implementation, chainID, tokenAddress, tokenId, salt, initData);
  const receipt = await tx.wait();
  const address = await registry.account(implementation, chainID, tokenAddress, tokenId, salt)
  if(receipt.status == 1 && address){
   console.log("Account created successfully at address: ", address);
  }
   else{
    console.log("Account creation failed");
  }

}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

