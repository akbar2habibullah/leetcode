/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    let maxLeft = left.length > 0 ? Math.max(...left) : 0;
    let minRight = right.length > 0 ? Math.min(...right) : n;
    return Math.max(maxLeft, n - minRight);
};