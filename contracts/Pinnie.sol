// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";


contract Pinnie is ERC721URIStorage {
    uint256 public tokenId;
    event minted(uint256);

    constructor() ERC721("Pinnie", "PIN") {}

    function mint(address to, string memory tokenURI) external payable {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI);
        emit minted(tokenId);
        tokenId += 1;
    }

    function nextId() external view returns(uint256) {
        return tokenId;
    }
}