const axios = require('axios');

const serverUrl = 'http://localhost:1225';

async function main() {

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name: 'Miss Margarita Lowe Sr.'
  });

  console.log({ gift });
}

main();
