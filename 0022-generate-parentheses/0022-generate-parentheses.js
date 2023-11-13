/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    backtrack(result, "", 0, 0, n);
    return result;
};

function backtrack(result, current, open, close, max) {
    if (current.length === max * 2) {
        result.push(current);
        return;
    }

    if (open < max) {
        backtrack(result, current + "(", open + 1, close, max);
    }
    if (close < open) {
        backtrack(result, current + ")", open, close + 1, max);
    }
}