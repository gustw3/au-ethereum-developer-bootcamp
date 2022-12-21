const hre = require("hardhat");

async function main() {
  const ContractWinner = await hre.ethers.getContractFactory("ContractWinner");
  const contract = await ContractWinner.deploy();

  await contract.deployed();

  console.log(
    `Contract deployed to ${contract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
