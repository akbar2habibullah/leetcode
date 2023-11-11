/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
    let height = getHeight(root) - 1;
    let width = Math.pow(2, height + 1) - 1;
    let res = Array(height + 1).fill().map(() => Array(width).fill(""));
    fillMatrix(root, 0, 0, width - 1, res);
    return res;
};

function getHeight(root) {
    if (!root) return 0;
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

function fillMatrix(root, level, left, right, res) {
    if (!root) return;
    let mid = left + Math.floor((right - left) / 2);
    res[level][mid] = root.val.toString();
    fillMatrix(root.left, level + 1, left, mid - 1, res);
    fillMatrix(root.right, level + 1, mid + 1, right, res);
}