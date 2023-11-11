/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    return generate(1, n);
};

function generate(start, end) {
    let list = [];

    if (start > end) {
        list.push(null);
        return list;
    }

    for (let i = start; i <= end; i++) {
        let leftSubtrees = generate(start, i - 1);
        let rightSubtrees = generate(i + 1, end);

        for (let j = 0; j < leftSubtrees.length; j++) {
            for (let k = 0; k < rightSubtrees.length; k++) {
                let node = new TreeNode(i);
                node.left = leftSubtrees[j];
                node.right = rightSubtrees[k];
                list.push(node);
            }
        }
    }

    return list;
}