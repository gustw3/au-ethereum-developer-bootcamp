const ethers = require('ethers');
const { Wallet } = ethers;

// create a wallet with a private key
const wallet1 = new Wallet("0xf2f48ee19680706196e2e339e5da3491186e0c4c5030670656b0e0164837257d");

// create a wallet from mnemonic
const wallet2 = Wallet.fromMnemonic("plate lawn minor crouch bubble evidence palace fringe bamboo laptop dutch ice");

module.exports = {
    wallet1,
    wallet2,
}
const ethers = require('ethers');
const { Wallet, utils } = ethers;
const { wallet1 } = require('./wallets');

const oneEther = utils.parseUnits('1000000000', 'gwei')
const oneGwei = utils.parseUnits('1', 'gwei')

// TODO: replace all undefined values
const signaturePromise = wallet1.signTransaction({
    value: oneEther,
    to: "0xdD0DC6FB59E100ee4fA9900c2088053bBe14DE92",
    gasLimit: 46200,
    gasPrice: oneGwei
});

module.exports = signaturePromise;
