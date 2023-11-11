/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var reverseBetween = function(head, left, right) {
    let dummy = new ListNode(0); 
    dummy.next = head;
    let pre = dummy; 

    for(let i = 0; i < left - 1; i++) pre = pre.next;

    let start = pre.next; 
    let then = start.next; 

    for(let i = 0; i < right - left; i++) {
        start.next = then.next;
        then.next = pre.next;
        pre.next = then;
        then = start.next;
    }

    return dummy.next;
};