/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
    let peakIndex = findPeakIndex(mountainArr);
    let leftIndex = binarySearch(mountainArr, target, 0, peakIndex, true);
    if (leftIndex !== -1) {
        return leftIndex;
    }
    return binarySearch(mountainArr, target, peakIndex + 1, mountainArr.length() - 1, false);
};

var findPeakIndex = function(mountainArr) {
    let start = 0;
    let end = mountainArr.length() - 1;
    while (start < end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (mountainArr.get(mid) < mountainArr.get(mid + 1)) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    return start;
};

var binarySearch = function(mountainArr, target, start, end, isAsc) {
    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);
        if (mountainArr.get(mid) === target) {
            return mid;
        }
        if (isAsc) {
            if (mountainArr.get(mid) < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        } else {
            if (mountainArr.get(mid) > target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1;
};