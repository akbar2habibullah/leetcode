/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function(n, roads) {
    let graph = new Array(n).fill(0).map(() => new Array());
    let count = new Array(n).fill(0);

    for(let road of roads) {
        graph[road[0]].push(road[1]);
        graph[road[1]].push(road[0]);
        count[road[0]]++;
        count[road[1]]++;
    }

    let maxRank = 0;
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            let rank = count[i] + count[j];
            if(graph[i].includes(j)) rank--;
            maxRank = Math.max(maxRank, rank);
        }
    }

    return maxRank;
};