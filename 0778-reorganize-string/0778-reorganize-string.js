/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let map = new Map();
    for(let c of s) {
        if(!map.has(c)) {
            map.set(c, 0);
        }
        map.set(c, map.get(c) + 1);
    }

    let maxHeap = Array.from(map.entries());
    maxHeap.sort((a, b) => b[1] - a[1]);

    let result = '';
    while(maxHeap.length > 1) {
        let first = maxHeap.shift();
        let second = maxHeap.shift();

        result += first[0];
        result += second[0];

        if(--first[1] > 0) {
            maxHeap.push(first);
        }
        if(--second[1] > 0) {
            maxHeap.push(second);
        }
        maxHeap.sort((a, b) => b[1] - a[1]);
    }

    if(maxHeap.length > 0) {
        let last = maxHeap[0];
        if(last[1] > 1) {
            return '';
        }
        result += last[0];
    }

    return result;
};