/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

function XNode(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

var copyRandomList = function(head) {
    if(head === null) return null;
    
    let map = new Map();
    let node = head;
    
    while(node) {
        map.set(node, new XNode(node.val, null, null));
        node = node.next;
    }
    
    node = head;
    
    while(node) {
        map.get(node).next = map.get(node.next) || null;
        map.get(node).random = map.get(node.random) || null;
        node = node.next;
    }
    
    return map.get(head);
};