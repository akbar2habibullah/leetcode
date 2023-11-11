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

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var minDepth = function(root) {
    if(root === null) return 0;
    let depth = 1;
    let queue = [root, null];
    while(queue.length > 0) {
        let node = queue.shift();
        if(node === null) {
            depth++;
            if(queue.length > 0) queue.push(null);
        } else {
            if(node.left === null && node.right === null) return depth;
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
    }
    return depth;
};