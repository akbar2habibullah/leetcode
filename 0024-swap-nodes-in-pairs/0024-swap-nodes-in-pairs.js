/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var swapPairs = function(head) {
    if(head === null || head.next === null) {
        return head;
    }
    
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy;
    
    while(head !== null && head.next !== null) {
        let firstNode = head;
        let secondNode = head.next;
        
        // Swapping
        prev.next = secondNode;
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        
        // Reinitializing the head and prev for next swap
        prev = firstNode;
        head = firstNode.next;
    }
    
    return dummy.next;
};