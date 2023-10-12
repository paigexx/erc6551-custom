// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
require("hardhat");

async function main() {
  const MyToken = await ethers.deployContract("MyToken");
  const myToken = await MyToken.waitForDeployment();
 

  const Account = await ethers.deployContract("ERC6551Account");
  const account = await Account.waitForDeployment();

  const Registry = await ethers.deployContract("ERC6551Registry");
  const registry = await Registry.waitForDeployment();

  console.log("MyToken contract deployed at:", myToken.target);
  console.log("Account contract deployed at:", account.target);
  console.log("Registry contract deployed at:", registry.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});