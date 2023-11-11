/**
 * @param {number[]} prices
 * @return {number}
 */
var getDescentPeriods = function(prices) {
    let count = 0;
    let window = 1;

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] == prices[i - 1] - 1) {
            window++;
            count += window;
        } else {
            window = 1;
            count++;
        }
    }

    return count + 1;
};