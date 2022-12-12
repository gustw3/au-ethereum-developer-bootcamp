const provider = require('./provider');

async function getTotalBalance(addresses) {
    let requests = []
    let balance = 0;
    for (let i = 0; i < addresses.length; i++) {
        requests.push({
            jsonrpc: "2.0",
            id: i,
            method: "eth_getBalance",
            params: [
                addresses[i],
                "latest"
            ]
        })
    }

    const response = await provider.send(requests);

    response.map((account) => {
        balance = balance + parseInt(account.result, 16);
    })

    return balance
}

module.exports = getTotalBalance;
