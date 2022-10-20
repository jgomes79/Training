// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract Money {
    
    mapping (address => uint) public balances;
    address public owner;

    event deposited(uint _amount, address _user);

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "OnlyOwner");
        _;
    }

    function deposit() external payable {
        require(msg.value > 0, "NoValue");

        balances[msg.sender] += msg.value;

        emit deposited(msg.value, msg.sender);
    }

    function withdraw(uint _amount) external {
        uint userBalance = balances[msg.sender];
        require(_amount <= userBalance, "TooMuch");

        balances[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);
    }

    function withdrawAll() external onlyOwner {
        uint balance = address(this).balance;
       
        // Method 1 Deprecated
        //payable(owner).transfer(balance);

        // Method 2 More safe
        (bool success, ) = owner.call{value: balance}("");
        require(success == true, "BadTransfer");
    }

    function changeOwner(address _newOwner) external onlyOwner {
        owner = _newOwner;
    }
}