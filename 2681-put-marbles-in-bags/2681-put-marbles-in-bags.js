/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function(weights, k) {
    let n = weights.length;
    let pairWeights = new Array(n - 1).fill(0);
    for (let i = 0; i < n - 1; ++i) {
        pairWeights[i] = weights[i] + weights[i + 1];
    }
    pairWeights.sort((a, b) => a - b);

    let minScore = 0, maxScore = 0;
    for (let i = 0; i < k - 1; ++i) {
        minScore += pairWeights[i];
        maxScore += pairWeights[n - i - 2];
    }
    return maxScore - minScore;
};