
async function main() {

  const Counter = await hre.ethers.getContractFactory("Count");
  const counter = await Counter.deploy();

  await lock.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
