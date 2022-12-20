// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface Contract {
    function attempt() external;
}

contract DefineWinner {
  uint public x;
  function defineWinner() external returns (uint) {
    return x = 1;
    // Contract(_contract).attempt();
  }
}
