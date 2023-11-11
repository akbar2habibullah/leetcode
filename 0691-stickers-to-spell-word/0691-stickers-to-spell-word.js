/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function(stickers, target) {
    let n = target.length;
    let m = 1 << n;
    let dp = new Array(m).fill(Infinity);
    dp[0] = 0;
    for (let mask = 0; mask < m; mask++) {
        if (dp[mask] === Infinity) continue;
        for (let sticker of stickers) {
            let nextMask = mask;
            for (let c of sticker) {
                for (let i = 0; i < n; i++) {
                    if (target[i] === c && !((nextMask >> i) & 1)) {
                        nextMask |= 1 << i;
                        break;
                    }
                }
            }
            dp[nextMask] = Math.min(dp[nextMask], dp[mask] + 1);
        }
    }
    return dp[m - 1] === Infinity ? -1 : dp[m - 1];
};