/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reverseKGroup = function(head, k) {
    let count = 0;
    let ptr = head;
    
    // First, see if there are at least k nodes left in the linked list.
    while (count != k && ptr != null) {  
        ptr = ptr.next;
        count ++;
    }
    
    if (count == k) { // If there are k nodes, then we reverse them
        ptr = reverseKGroup(ptr, k); // reverse list with k+1 node as head
        while (count-- > 0) { // reverse current k-group of linked list.
            let tmp = head.next; // tmp - next head in direct part
            head.next = ptr; // preappending "direct" head to the reversed list 
            ptr = head; // move head of reversed part to a new node
            head = tmp; // move "direct" head to the next node in direct part
        }
        head = ptr;
    }
    return head;
};