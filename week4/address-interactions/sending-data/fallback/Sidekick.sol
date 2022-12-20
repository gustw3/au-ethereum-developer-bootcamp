pragma solidity ^0.8.4;

contract Sidekick {
    function makeContact(address hero) external {
        bytes memory payload = abi.encodeWithSignature("alert(uint256,bool", 1, false);
        (bool success,) = hero.call(payload);
        require(success);
    }
}