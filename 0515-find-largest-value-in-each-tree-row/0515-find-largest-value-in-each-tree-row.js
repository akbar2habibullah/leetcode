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
var largestValues = function(root) {
    if (!root) return [];

    let result = [];
    let queue = [root];

    while (queue.length) {
        let levelSize = queue.length;
        let maxInLevel = -Infinity;

        for (let i = 0; i < levelSize; i++) {
            let node = queue.shift();
            maxInLevel = Math.max(maxInLevel, node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(maxInLevel);
    }

    return result;
};