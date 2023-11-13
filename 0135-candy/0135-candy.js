/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let n = ratings.length;
    let left = new Array(n).fill(1);
    let right = new Array(n).fill(1);

    // Scan from left to right
    for (let i = 1; i < n; i++) {
        if (ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
    }

    // Scan from right to left
    for (let i = n - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            right[i] = right[i + 1] + 1;
        }
    }

    // Sum up the maximum candies from both scans
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += Math.max(left[i], right[i]);
    }

    return sum;
};