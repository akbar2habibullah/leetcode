/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    if(m == 0) return false;
    let n = matrix[0].length;
    
    // binary search
    let left = 0, right = m * n - 1;
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midElement = matrix[Math.floor(mid / n)][mid % n];
        if(midElement == target) {
            return true;
        } else if(midElement < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
};