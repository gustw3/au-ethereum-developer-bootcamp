const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null)
    }

    insert(string) {
        const keys = string.split('');
        let node = this.root;

        for (let i = 0; i < keys.length; i++) {
            if (!node.children == false && keys[i] != Object(node.children[keys[i]]).key) {
                node.children[keys[i]] = new TrieNode(keys[i])
                i == keys.length - 1 ? node.children[keys[i]].isWord = true : node.children[keys[i]].isWord = false;
            }
            node = node.children[keys[i]]
        }
    }

    contains(word) {
        const keys = word.split('');
        let node = this.root;
        let count = 0;
        let present = false;

        for (let i = 0; i < keys.length; i++) {
            if (node.children[keys[i]] != undefined) {
                if (keys[i] == Object(node.children[keys[i]]).key) {
                    count = count + 1
                }
                if (count == keys.length && node.children[keys[i]].isWord == true) {
                    present = true;
                }
                node = node.children[keys[i]]
            }
        }
        return present
    }
}

module.exports = Trie;
