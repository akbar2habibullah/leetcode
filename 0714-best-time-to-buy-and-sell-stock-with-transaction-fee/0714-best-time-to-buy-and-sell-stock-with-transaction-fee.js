/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let sold = 0, hold = -prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        sold = Math.max(sold, hold + prices[i] - fee);
        hold = Math.max(hold, sold - prices[i]);
    }
    
    return sold;
};