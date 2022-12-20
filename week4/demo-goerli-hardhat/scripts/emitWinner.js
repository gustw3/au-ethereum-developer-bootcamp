const hre = require("hardhat");

const CONTRACT_ADDR = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const provider = new ethers.providers.AlchemyProvider("goerli", process.env.ALCHEMY_PK)
const wallet = new ethers.Wallet(process.env.PK , provider)
const abi = [
  {
    "inputs": [],
    "name": "defineWinner",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "x",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]


async function main() {
  const contract = new ethers.Contract(
    CONTRACT_ADDR,
    abi ,
    wallet);

    const tx = await contract.winnerIs();

    await tx.wait();

    console.log(tx);
  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
