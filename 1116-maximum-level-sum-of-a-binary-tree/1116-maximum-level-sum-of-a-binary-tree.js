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
 * @return {number}
 */
var maxLevelSum = function(root) {
    if (!root) return 0;

    let maxSum = -Infinity;
    let maxLevel = 1;
    let level = 1;
    let queue = [root, null];
    let sum = 0;

    while (queue.length > 0) {
        let node = queue.shift();

        if (node === null) {
            if (sum > maxSum) {
                maxSum = sum;
                maxLevel = level;
            }

            sum = 0;
            level++;

            if (queue.length > 0) {
                queue.push(null);
            }
        } else {
            sum += node.val;

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return maxLevel;
};