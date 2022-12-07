
class MerkleTree {
  constructor(leaves, concat) {
      this.leaves = leaves;
      this.concat = concat;
      this.length = leaves.length;
      //this.proof = [];
  }
  getRoot() {
      return this.concatRecursive(this.leaves, this.concat);
  }

  getProof(index, layer = this.leaves, proof = []) {
      if (layer.length === 1) return proof;
      const newLayer = [];
      for (let i = 0; i < layer.length; i += 2) {
          let left = layer[i];
          let right = layer[i + 1];
          if (!right) {
              newLayer.push(left);
          } else {
              newLayer.push(this.concat(left, right));

              if (i === index || i === index - 1) {
                  let isLeft = !(index % 2);
                  proof.push({
                      data: isLeft ? right : left,
                      left: !isLeft,
                  });
              }
          }
      }
      return this.getProof(Math.floor(index / 2), newLayer, proof);
  }


  concatRecursive(leaves, concat) {
      let hash = [];
      if (leaves.length <= 1) {
          hash = leaves[0];
          return hash;
      } else {
          while (leaves.length != 0) {
              if (leaves.length == 1) {
                  hash.push(leaves[0]);
                  leaves.splice(0, 1);
              } else {
                  hash.push(concat(leaves[0], leaves[1]));
                  leaves.splice(0, 2);
              }

          }
          return this.concatRecursive(hash, concat);
      }
  }
}

module.exports = MerkleTree;
