/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    let children = new Set([...leftChild, ...rightChild]);
    let root = [...Array(n).keys()].filter(i => !children.has(i))[0];

    function dfs(node) {
        if (node === -1) {
            return true;
        }
        if (visited.has(node)) {
            return false;
        }
        visited.add(node);
        return dfs(leftChild[node]) && dfs(rightChild[node]);
    }

    let visited = new Set();
    return dfs(root) && visited.size === n;
};