const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    let transactions = [];
    let proofOfWork = false;
    let nonce = -1;
    let hash;
    let length = mempool.length;

    blocks.push({id: blocks.length, nonce: nonce});
    while (proofOfWork != true) {
        nonce++;
        blocks[blocks.length - 1][nonce] = nonce
        hash = SHA256(JSON.stringify((blocks[blocks.length - 1])));

        if (BigInt(`0x${hash}`) < TARGET_DIFFICULTY) {
            proofOfWork = true;
            blocks[blocks.length - 1]["hash"] = hash;
        }
    }


    for (i = 0; i < length; i++) {
        if (transactions.length < 10) {
            transactions.push(mempool[0])
            mempool.shift();
        }
    }
    blocks[blocks.length - 1]["transactions"] = transactions;
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool
};
