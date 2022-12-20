// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {

    address public owner;

    constructor() payable {
        owner = msg.sender;
        deposit();
    }
    
    receive() external payable {}

    function deposit() public payable {
        require(address(this).balance >= 1e18, "Insufficient balance");
    }

    function withdraw() public payable {
        require(msg.sender == owner);
        (bool success,) = owner.call{ value: address(this).balance }("");
        require(success);
    }
}