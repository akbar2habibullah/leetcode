/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */

 class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length > 1) {
            const max = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown(0);
            return max;
        } else if (this.heap.length === 1) {
            return this.heap.pop();
        } else {
            return null;
        }
    }

    bubbleUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] < this.heap[index]) {
                [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown(index) {
        while (index < this.heap.length) {
            let largestIndex = index;
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] > this.heap[largestIndex]) {
                largestIndex = leftChildIndex;
            }
            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] > this.heap[largestIndex]) {
                largestIndex = rightChildIndex;
            }
            if (largestIndex !== index) {
                [this.heap[largestIndex], this.heap[index]] = [this.heap[index], this.heap[largestIndex]];
                index = largestIndex;
            } else {
                break;
            }
        }
    }
}

var minStoneSum = function(piles, k) {
    const heap = new MaxHeap();
    let totalStones = 0;
    for (let i = 0; i < piles.length; i++) {
        heap.push(piles[i]);
        totalStones += piles[i];
    }
    for (let i = 0; i < k; i++) {
        const maxPile = heap.pop();
        const removedStones = Math.floor(maxPile / 2);
        totalStones -= removedStones;
        heap.push(maxPile - removedStones);
    }
    return totalStones;
};