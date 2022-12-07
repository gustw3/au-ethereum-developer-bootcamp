const express = require('express');
const verifyProof = require('../utils/verifyProof');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const port = 1225;

const app = express();
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const merkleTree = new MerkleTree(niceList);
const root = merkleTree.getRoot();


app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const name = req.body.name;
  const index = niceList.findIndex(n => n === name);
  if (index >= 0) {
    const proof = merkleTree.getProof(index);
    verifyProof(proof, name, root) ?
    res.send("You got a toy robot!")
    : res.send("You are not on the list :(");
  } else {
    res.send("You are not on the list :(");
  }

});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
