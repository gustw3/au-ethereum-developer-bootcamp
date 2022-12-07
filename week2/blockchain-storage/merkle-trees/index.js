function verifyProof(proof, node, root, concat) {

  let layer = proof[0].left ? concat(proof[0].data, node) : concat(node, proof[0].data);

  for (let i = 1; i < proof.length; i++) {
    proof[i].left ? layer = concat(proof[i].data, layer) : layer = concat(layer, proof[i].data);
  }

  return layer == root ? true : false;
}

module.exports = verifyProof;
