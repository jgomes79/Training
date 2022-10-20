// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract Variables {
    string public message = "Hello World!!!!";
    uint256 public number = 123;
    bool public isHappy = true;
    address public contractCreator;

    uint[] public numbers = [1, 20, 45];
    string[3] public messages = ["hello", "hello world", "bye bye"];

    struct PersonArray {
        uint id;
        string name;
        uint age;
        uint height;
        address walletAddress;
    }
    PersonArray[] public peopleArray;

    struct PersonMapping {
        uint id;
        string name;
        uint age;
        uint height;
    }
    mapping (address => PersonMapping) public peopleMapping;

    constructor () {
        contractCreator = msg.sender;
    }

    function getMessage() external view returns (string memory) {
        return message;
    }

    function setMessage(string calldata _message) external {
        message = _message;
    }

    function getNumber(uint _index) external view returns (uint256) {
        return numbers[_index];
    }

    function setNumber(uint _newNumber, uint _index) external {
        numbers[_index] = _newNumber;
    }

    function addNumber(uint _number) external {
        numbers.push(_number);
    }

    function addPerson(uint _id, string calldata _name, uint _age, uint _height, address _walletAddress) external {
        peopleArray.push(PersonArray({
            id: _id,
            name: _name,
            age: _age,
            height: _height,
            walletAddress: _walletAddress
        }));
    }

    function addPersonMapping(uint _id, string calldata _name, uint _age, uint _height, address _walletAddress) external {
        peopleMapping[_walletAddress] = PersonMapping({
            id: _id,
            name: _name,
            age: _age,
            height: _height
        });
   }
}