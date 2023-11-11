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
 * @return {ListNode[]}
 */

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var splitListToParts = function(head, k) {
    let cur = head;
    let N = 0;
    while (cur) {
        cur = cur.next;
        N++;
    }

    let width = Math.floor(N / k), rem = N % k;

    let ans = new Array(k).fill(null);
    cur = head;
    for (let i = 0; i < k; ++i) {
        let root = cur;
        for (let j = 0; j < width + (i < rem ? 1 : 0) - 1; ++j) {
            if (cur) cur = cur.next;
        }
        if (cur) {
            let prev = cur;
            cur = cur.next;
            prev.next = null;
        }
        ans[i] = root;
    }
    return ans;
};