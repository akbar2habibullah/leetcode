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

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left || null;
    this.right = right || null;
}

var allPossibleFBT = function(n) {
    if (n % 2 === 0) {
        return [];
    }

    let dp = new Array(n + 1).fill().map(() => []);
    dp[1].push(new TreeNode(0));

    for (let count = 3; count <= n; count += 2) {
        for (let leftCount = 1; leftCount < count; leftCount += 2) {
            let rightCount = count - 1 - leftCount;
            for (let leftTree of dp[leftCount]) {
                for (let rightTree of dp[rightCount]) {
                    let root = new TreeNode(0);
                    root.left = leftTree;
                    root.right = rightTree;
                    dp[count].push(root);
                }
            }
        }
    }

    return dp[n];
};