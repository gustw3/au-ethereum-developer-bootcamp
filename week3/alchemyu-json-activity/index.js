const axios = require('axios');
require('dotenv').config();

const ALCHEMY_URL = `https://polygon-mainnet.g.alchemy.com/v2/${process.env.ALCHEMY_PK}`;

axios.post(ALCHEMY_URL, {
  jsonrpc: "2.0",
  id: 1,
  method: "eth_getBalance",
  params: [
    "0xbdE53323099249735DE81e9ecb88B9D9Bd5e8cFF", // block 46147
    "latest"  // retrieve the full transaction object in transactions array
  ]
}).then((response) => {
  console.log(response.data.result);
});
