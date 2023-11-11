/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */

 class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this.root;
        let prefix = '';
        for (let ch of word) {
            if (!node.children[ch] || node.isEnd) {
                break;
            }
            prefix += ch;
            node = node.children[ch];
        }
        return node.isEnd ? prefix : '';
    }
}

var replaceWords = function(dictionary, sentence) {
    const trie = new Trie();
    for (let root of dictionary) {
        trie.insert(root);
    }

    let result = [];
    for (let word of sentence.split(' ')) {
        let root = trie.search(word);
        result.push(root ? root : word);
    }

    return result.join(' ');
};