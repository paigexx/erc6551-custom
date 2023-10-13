const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

describe("Pinnie", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployPinnie() {
    const [owner, otherAccount] = await ethers.getSigners();
    const Pinnie = await ethers.getContractFactory("Pinnie");
    const pinnie = await Pinnie.deploy();
    const tokenId = 0
    const mintToAddress = process.env.WALLET_ADDRESS

    return { pinnie, owner, tokenId, mintToAddress };
  }

  describe("Minting", function () {
    it("Should deploy contract", async function () {

    });
    it("Should fetch the next tokenId", async function () {
      const { pinnie, tokenId } = await loadFixture(deployPinnie);
      expect(await pinnie.nextId()).to.equal(tokenId);
    });
    it("Should mint a token", async function () {
      const { pinnie, mintToAddress } = await loadFixture(deployPinnie);
      const tx = await pinnie.mint(mintToAddress, "");
      const receipt = await tx.wait();    
      expect(receipt.status).to.equal(1);
    }
     );
  })

});
