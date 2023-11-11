/**
 * @param {number} k
 * @return {number}
 */
var preimageSizeFZF = function(k) {
    let left = 0, right = 5 * k;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (trailingZeroes(mid) < k) left = mid + 1;
        else if (trailingZeroes(mid) > k) right = mid - 1;
        else return 5;
    }
    return 0;
};

function trailingZeroes(n) {
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}