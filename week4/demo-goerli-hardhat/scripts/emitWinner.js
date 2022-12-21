const hre = require("hardhat");

const CONTRACT_ADDR = "0x51d5EE947c4a74AD2085Cbb41d0df9513D2b6684";
const provider = new ethers.providers.AlchemyProvider("goerli", process.env.ALCHEMY_PK)
const wallet = new ethers.Wallet(process.env.PK , provider)
const abi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_address",
        "type": "address"
      }
    ],
    "name": "emitWinner",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]


async function main() {
  const contract = new ethers.Contract(
    CONTRACT_ADDR,
    abi ,
    wallet);

    const tx = await contract.emitWinner("0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502");

    await tx.wait();

    console.log(tx);
  }

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
