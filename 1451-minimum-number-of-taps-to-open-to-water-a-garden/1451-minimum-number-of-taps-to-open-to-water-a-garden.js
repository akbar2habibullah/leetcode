/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
    let intervals = [];
    for (let i = 0; i <= n; i++) {
        intervals.push([i - ranges[i], i + ranges[i]]);
    }
    intervals.sort((a, b) => a[0] - b[0]);

    let end = 0, open = 0, i = 0;
    while (end < n) {
        let furthest = end;
        while (i <= n && intervals[i][0] <= end) {
            furthest = Math.max(furthest, intervals[i++][1]);
        }
        if (furthest == end) return -1;
        open++;
        end = furthest;
    }
    return open;
};