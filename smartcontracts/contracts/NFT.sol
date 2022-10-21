// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract CoolNFT is ERC721 {
    using Strings for uint256;

    string public uri;

    constructor(string memory _uri) ERC721("CoolNFT", "NFT") {
        uri = _uri;

        for (uint i=0; i<20; i++) {
            _safeMint(msg.sender, i+1);
        }
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        return string(abi.encodePacked(uri, tokenId.toString(), ".json"));
    }
}
