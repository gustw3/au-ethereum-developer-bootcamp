// SPDX-License-Identifier: MIT
pragma solidity 0.8.4;

contract Escrow {

    event Approved(uint balance);
    address public depositor;
    address public beneficiary;
    address public arbiter;
    bool public isApproved;
    uint public value;

    constructor(address _arbiter, address _beneficiary) payable {
        depositor = msg.sender;
        beneficiary = _beneficiary;
        arbiter = _arbiter;
        value = msg.value;

    }

    function approve() external {
        require(msg.sender == arbiter);
        uint bal = address(this).balance;
        (bool s,) = beneficiary.call{value: address(this).balance}("");
        require(s);
        isApproved = true;
        emit Approved(bal);
    }
}
