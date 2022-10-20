// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CoolToken is ERC20 {

    constructor(uint256 initialSupply) ERC20("CoolToken", "COOL") {  
        _mint(msg.sender, initialSupply);
    }

    function burn(uint256 _amount) external {
        _burn(msg.sender, _amount);
    }
}
