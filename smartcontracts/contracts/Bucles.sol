// SPDX-License-Identifier: MIT
pragma solidity 0.8.16;

contract Bucles {
    
    function count() external pure returns(uint) {
        uint counter = 0;

        for (uint i=0; i<10; i++) {
            if (i % 2 == 0) {
                counter++;
            }
            else {
                counter = counter * 2;
            }
        }

        return counter;
    }
}