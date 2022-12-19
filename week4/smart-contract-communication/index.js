const ethers = require('ethers')
require('dotenv').config();

const provider = new ethers.providers.AlchemyProvider("goerli", process.env.ALCHEMY_PK)
const wallet = new ethers.Wallet(process.env.PK , provider)

async function main() {
  const counterContract = new ethers.Contract(
    '0x04F985D4e06Ac2B26813C80406Fc9f388f2903CB',
    [
      {
        "inputs": [],
        "name": "decr",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "inc",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "count",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "get",
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
    ],
    wallet
    );

    const tx = await counterContract.inc()
    const currentCounterValue = await counterContract.get()
}

main()
