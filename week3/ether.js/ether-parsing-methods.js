const { utils } = require('ethers');

const oneEther = utils.parseUnits('1', 'ether');
const oneBillionGwei = utils.parseUnits('1000000000', 'gwei');

console.log(oneEther.eq(oneBillionGwei)); // true

const oneGwei = utils.parseUnits('1', 'gwei');
const oneBillionWei = utils.parseUnits('1000000000', 'wei');

console.log(oneGwei.eq(oneBillionWei)); // true