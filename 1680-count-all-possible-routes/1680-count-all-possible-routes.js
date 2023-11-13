/**
 * @param {number[]} locations
 * @param {number} start
 * @param {number} finish
 * @param {number} fuel
 * @return {number}
 */
var countRoutes = function(locations, start, finish, fuel) {
    const n = locations.length;
    const MOD = 10**9 + 7;
    const dp = Array.from(Array(n), () => Array(fuel + 1).fill(0));
    
    for(let i = 0; i <= fuel; i++) {
        dp[finish][i] = 1;
    }
    
    for(let j = 0; j <= fuel; j++) {
        for(let i = 0; i < n; i++) {
            for(let k = 0; k < n; k++) {
                if(k !== i && Math.abs(locations[i] - locations[k]) <= j) {
                    dp[i][j] = (dp[i][j] + dp[k][j - Math.abs(locations[i] - locations[k])]) % MOD;
                }
            }
        }
    }
    
    return dp[start][fuel];
};