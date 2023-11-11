/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var distanceK = function(root, target, k) {
    let graph = {};
    let queue = [[root, null]];
    let visited = new Set();
    let result = [];
    
    while(queue.length) {
        let [node, parent] = queue.shift();
        if(node) {
            graph[node.val] = [parent, node.left, node.right].filter(Boolean).map(n => n.val);
            queue.push(...[[node.left, node], [node.right, node]].filter(n => n[0]));
        }
    }
    
    queue = [[target.val, 0]];
    while(queue.length) {
        let [node, dist] = queue.shift();
        if(!visited.has(node)) {
            visited.add(node);
            if(dist === k) result.push(node);
            queue.push(...graph[node].map(n => [n, dist + 1]));
        }
    }
    
    return result;
};