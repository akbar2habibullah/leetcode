/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let n = graph.length;
    let color = new Array(n).fill(0);

    let ans = [];

    for (let i = 0; i < n; ++i)
        if (dfs(i, color, graph))
            ans.push(i);

    return ans;
};

function dfs(node, color, graph) {
    if (color[node] > 0)
        return color[node] == 2;

    color[node] = 1;
    for (let nei of graph[node])
        if (!dfs(nei, color, graph))
            return false;

    color[node] = 2;
    return true;
}