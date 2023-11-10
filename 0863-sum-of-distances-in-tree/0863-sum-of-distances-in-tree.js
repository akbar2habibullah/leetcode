/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    let graph = Array.from({length: n}, () => []);
    let count = Array(n).fill(1);
    let res = Array(n).fill(0);

    for(let edge of edges){
        graph[edge[0]].push(edge[1]);
        graph[edge[1]].push(edge[0]);
    }

    function dfs(node = 0, parent = -1){
        for(let child of graph[node]){
            if(child === parent) continue;
            dfs(child, node);
            count[node] += count[child];
            res[node] += res[child] + count[child];
        }
    }

    function dfs2(node = 0, parent = -1){
        for(let child of graph[node]){
            if(child === parent) continue;
            res[child] = res[node] - count[child] + n - count[child];
            dfs2(child, node);
        }
    }

    dfs();
    dfs2();

    return res;
};