// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
	struct User {
		uint balance;
		bool isActive;
	}
	User user;

	mapping(address => User) public users;

	function createUser() external {
		require(users[msg.sender].isActive == false, 'User already active');
		user = User(100, true);
		users[msg.sender] = user;
	}

	function transfer(address _address, uint amount) external {
		require(users[msg.sender].isActive == true, "User not active");
		require(users[_address].isActive == true, "Receiver not active");
		require(users[msg.sender].balance > amount, "Not enough funds");

		users[_address].balance += amount;
		users[msg.sender].balance -= amount;
	}
}
