/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */

class HeapNode {
    constructor(i, j, sum) {
        this.i = i;
        this.j = j;
        this.sum = sum;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    insertKey(node) {
        this.heap.push(node);
        this.heapifyUp(this.heap.length - 1);
    }

    heapifyUp(i) {
        while (i !== 0 && this.heap[this.parent(i)].sum > this.heap[i].sum) {
            this.swap(i, this.parent(i));
            i = this.parent(i);
        }
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        let root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return root;
    }

    heapifyDown(i) {
        let smallest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < this.heap.length && this.heap[left].sum < this.heap[smallest].sum) {
            smallest = left;
        }

        if (right < this.heap.length && this.heap[right].sum < this.heap[smallest].sum) {
            smallest = right;
        }

        if (smallest !== i) {
            this.swap(i, smallest);
            this.heapifyDown(smallest);
        }
    }
}


var kSmallestPairs = function(nums1, nums2, k) {
    if (nums1.length === 0 || nums2.length === 0 || k === 0) {
        return [];
    }

    let heap = new MinHeap();
    let result = [];

    for (let i = 0; i < nums1.length; i++) {
        heap.insertKey(new HeapNode(i, 0, nums1[i] + nums2[0]));
    }

    while (k > 0 && heap.size() > 0) {
        let node = heap.extractMin();
        result.push([nums1[node.i], nums2[node.j]]);

        if (node.j + 1 < nums2.length) {
            heap.insertKey(new HeapNode(node.i, node.j + 1, nums1[node.i] + nums2[node.j + 1]));
        }

        k--;
    }

    return result;
};