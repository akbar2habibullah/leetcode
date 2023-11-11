/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    let unfairness = Number.MAX_SAFE_INTEGER;
    let distribution = new Array(k).fill(0);

    function dfs(index) {
        if (index === cookies.length) {
            let max = Math.max(...distribution);
            unfairness = Math.min(unfairness, max);
            return;
        }

        for (let i = 0; i < k; i++) {
            distribution[i] += cookies[index];
            dfs(index + 1);
            distribution[i] -= cookies[index];
        }
    }

    dfs(0);
    return unfairness;
};