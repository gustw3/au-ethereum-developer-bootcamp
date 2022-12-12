const { providers } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

/**
 * Given an ethereum address find all the addresses
 * that were sent ether from that address
 * @param {string} address - The hexidecimal address for the sender
 * @async
 * @returns {Array} all the addresses that receieved ether
 */
async function findEther(address) {
    let block = await provider.getBlockWithTransactions()
    let addresses = [];

    while (addresses.length != 10) {
        block.transactions.map((transaction) => {
            if (transaction.from == address) {
                addresses.push(transaction.to);
            }
        })

        block = await provider.getBlockWithTransactions(block.parentHash)
    }
    return addresses;
}

module.exports = findEther;
