let config = {};
// Setup: npm install @alch/alchemy-sdk
const Network = require("alchemy-sdk");

// Optional Config object, but defaults to demo api-key and eth-mainnet.
config.alchemySettings = {
  apiKey: process.env.ALCHEMY_PK, // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

module.exports = config;
