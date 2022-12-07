const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

function findColor(hash) {
    let output;
    COLORS.map((color) => {
        let abytes = utf8ToBytes(color);
        let ahash = sha256(abytes);
        if (toHex(hash) == toHex(ahash)) {
            output = color;
        }
    })

    return output;
}

module.exports = findColor;