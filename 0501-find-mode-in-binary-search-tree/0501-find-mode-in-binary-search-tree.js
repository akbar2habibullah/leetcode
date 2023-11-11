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
 * @return {number[]}
 */
var findMode = function(root) {
    let counts = {};
    let maxCount = 0;
    let modes = [];

    function inorder(node) {
        if (node) {
            inorder(node.left);
            counts[node.val] = (counts[node.val] || 0) + 1;
            if (counts[node.val] > maxCount) {
                maxCount = counts[node.val];
                modes = [node.val];
            } else if (counts[node.val] === maxCount) {
                modes.push(node.val);
            }
            inorder(node.right);
        }
    }

    inorder(root);
    return modes;
};