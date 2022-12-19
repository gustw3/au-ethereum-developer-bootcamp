// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Count {
    uint public count;

    function get() public view returns (uint) {
        return count;
    }

    function inc() public {
        count++;
    }

    function decr() public {
        count--;
    }
}
