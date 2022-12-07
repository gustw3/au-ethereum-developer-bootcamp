class Tree {
  constructor() {
      this.root = null;
  }

  addNode(node) {
      if (this.root != null) {  
          this.revert(this.root, node);
      } else {
          this.root = node;
      }
      
  }

  hasNode(number) {
      return this.search(this.root, number)
  }

  revert(parent, child) {
      if (child.data < parent.data) {
          if (parent.left != null) {
              return this.revert(parent.left, child)
          } else {
              parent.left = child;
          }
      } else if (child.data > parent.data) {
          if (parent.right != null) {
              return this.revert(parent.right, child)
          } else {
              parent.right = child;
          }
      } 
  }

  search(parent, number) {
      if (parent.data == number) {
          return true;

      } else {
          if (number < parent.data) {
              if (parent.left == number) {
                  return true;
                  
              } else if (parent.left == null) {
                  return false;
              } else {
                  return this.search(parent.left, number)
              }
          } else if (number > parent.data) {
              if (parent.right == number) {
                  return true;
              } else if (parent.right == null) {
                  return false;
              } else {
                  return this.search(parent.right, number)
              }
          }
      }

  }

}

module.exports = Tree;
