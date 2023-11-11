/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let groups = {};
    let result = [];

    for (let i = 0; i < groupSizes.length; i++) {
        let size = groupSizes[i];
        if (!groups[size]) {
            groups[size] = [];
        }
        groups[size].push(i);

        if (groups[size].length === size) {
            result.push(groups[size]);
            groups[size] = [];
        }
    }

    return result;
};