/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(nums, cost) {
    let n = nums.length;
    let pairs = new Array(n);
    for (let i = 0; i < n; i++) {
        pairs[i] = [nums[i], cost[i]];
    }
    pairs.sort((a, b) => a[0] - b[0]);

    let prefixCost = new Array(n);
    prefixCost[0] = pairs[0][1];
    for (let i = 1; i < n; i++) {
        prefixCost[i] = prefixCost[i - 1] + pairs[i][1];
    }

    let totalCost = 0;
    for (let i = 1; i < n; i++) {
        totalCost += 1 * pairs[i][1] * (pairs[i][0] - pairs[0][0]);
    }

    let minTotalCost = totalCost;
    for (let i = 1; i < n; i++) {
        let gap = pairs[i][0] - pairs[i - 1][0];
        totalCost += 1 * prefixCost[i - 1] * gap;
        totalCost -= 1 * (prefixCost[n - 1] - prefixCost[i - 1]) * gap;
        minTotalCost = Math.min(minTotalCost, totalCost);
    }

    return minTotalCost;
};