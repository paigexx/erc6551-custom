const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("MyToken", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployMyToken() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy();
    const tokenId = 0
    const mintToAddress = process.env.WALLET_ADDRESS

    return { myToken, owner, tokenId, mintToAddress };
  }

  describe("Minting", function () {
    it("Should deploy contract", async function () {

    });
    it("Should fetch the next tokenId", async function () {
      const { myToken, tokenId } = await loadFixture(deployMyToken);
      expect(await myToken.nextId()).to.equal(tokenId);
    });
    it("Should mint a token", async function () {
      const { myToken, mintToAddress } = await loadFixture(deployMyToken);
      const tx = await myToken.mint(mintToAddress, "");
      const receipt = await tx.wait();    
      expect(receipt.status).to.equal(1);
    }
     );
  })

});
