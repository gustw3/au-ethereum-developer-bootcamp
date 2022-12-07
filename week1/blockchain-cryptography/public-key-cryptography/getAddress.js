const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    console.log(keccak256(new Uint8Array(publicKey).slice(1)));
    return keccak256(new Uint8Array(publicKey).slice(1)).slice(12, 32);
}

module.exports = getAddress;
