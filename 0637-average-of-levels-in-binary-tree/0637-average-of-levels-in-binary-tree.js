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
var averageOfLevels = function(root) {
    let result = [];
    let queue = [root];

    while (queue.length) {
        let sum = 0;
        let count = queue.length;
        let temp = [];

        for (let i = 0; i < count; i++) {
            let node = queue.shift();
            sum += node.val;

            if (node.left) temp.push(node.left);
            if (node.right) temp.push(node.right);
        }

        result.push(sum / count);
        queue = temp;
    }

    return result;
};