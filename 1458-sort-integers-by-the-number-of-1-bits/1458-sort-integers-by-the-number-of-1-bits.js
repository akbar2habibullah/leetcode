/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a, b) => {
        let aBits = a.toString(2).replace(/0/g, '').length;
        let bBits = b.toString(2).replace(/0/g, '').length;
        if (aBits === bBits) {
            return a - b;
        } else {
            return aBits - bBits;
        }
    });
};