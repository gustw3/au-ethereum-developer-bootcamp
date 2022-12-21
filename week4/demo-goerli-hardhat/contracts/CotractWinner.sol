// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface Contract {
    function attempt() external;
}

contract ContractWinner {
  function emitWinner(address _address) external {
    Contract(_address).attempt();
  }
}
