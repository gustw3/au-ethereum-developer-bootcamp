const { utils, providers, Wallet } = require('ethers');
const { ganacheProvider } = require('./config');

const provider = new providers.Web3Provider(ganacheProvider);
const oneEther = utils.parseUnits('1000000000', 'gwei')
const oneGwei = utils.parseUnits('1', 'gwei')

async function donate(privateKey, charities) {
    const wallet = await new Wallet(privateKey, provider);

    for (let i = 0; i < charities.length; i++) {
        let transaction = await wallet.sendTransaction({
            value: oneEther,
            to: charities[i],
            gasLimit: 37800,
            gasPrice: oneGwei

        })
    }
}

module.exports = donate;
