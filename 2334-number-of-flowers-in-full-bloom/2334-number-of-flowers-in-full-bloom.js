/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
    let start = [], end = [];
    for (let flower of flowers) {
        start.push(flower[0]);
        end.push(flower[1]);
    }

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let result = [];
    for (let person of people) {
        let startIndex = binarySearch(start, person);
        let endIndex = binarySearch(end, person - 1); 
        result.push(startIndex - endIndex);
    }

    return result;
};

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}