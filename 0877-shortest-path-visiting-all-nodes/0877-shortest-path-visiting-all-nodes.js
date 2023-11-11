/**
 * @param {number[][]} graph
 * @return {number}
 */
var shortestPathLength = function(graph) {
    let n = graph.length;
    let endMask = (1 << n) - 1;
    let queue = [];
    let visited = Array(n).fill(0).map(() => Array(1 << n).fill(false));
    for (let i = 0; i < n; i++) {
        queue.push([i, 1 << i]);
        visited[i][1 << i] = true;
    }
    let steps = 0;
    while (queue.length) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let [node, mask] = queue.shift();
            if (mask === endMask) {
                return steps;
            }
            for (let next of graph[node]) {
                let nextMask = mask | (1 << next);
                if (!visited[next][nextMask]) {
                    queue.push([next, nextMask]);
                    visited[next][nextMask] = true;
                }
            }
        }
        steps++;
    }
    return -1;
};