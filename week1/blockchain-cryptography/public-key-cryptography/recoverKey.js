const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    console.log(signature)
    return secp.recoverPublicKey(hashMessage(message), signature, recoveryBit);
}

module.exports = recoverKey;
