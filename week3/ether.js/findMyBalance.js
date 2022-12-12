const { Wallet, providers } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);

async function findMyBalance(privateKey) {
    const wallet = new Wallet(privateKey, provider);
    const balance = await wallet.getBalance("latest");

    return balance
}

module.exports = findMyBalance;
