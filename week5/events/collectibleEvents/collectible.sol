// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Collectible {
    event Deployed(address indexed _address);
    event Transfer(address indexed, address indexed);
    event ForSale(uint price, uint timestamp);
    event Purchase (uint amount, address indexed buyer);

    address public owner;
    uint public price;
    bool public forSale;

    constructor() {
        emit Deployed(msg.sender);
        owner = msg.sender;
    }

    function transfer(address _address) external {
        require(msg.sender == owner, "Not the current owner");
        owner = _address;

        emit Transfer(msg.sender, _address);
    }

    function markPrice(uint _price) external {
        require(msg.sender == owner);
        price = _price;
        forSale = true;
        emit ForSale(_price, block.timestamp);
    }

    function purchase() external payable {
        require(msg.value >= price);
        require(forSale);
        (bool s,) = owner.call{value: msg.value}("");
        (s);
        owner = msg.sender;
        forSale = false;
        emit Purchase(msg.value, msg.sender);

    }
}
