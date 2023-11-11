/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    const graph = Array.from({length: n}, () => []);
    const maxProb = Array(n).fill(0);
    const queue = [[start_node, 1]];
    maxProb[start_node] = 1;

    for (let i = 0; i < edges.length; i++) {
        const [a, b] = edges[i];
        const prob = succProb[i];
        graph[a].push([b, prob]);
        graph[b].push([a, prob]);
    }

    while (queue.length) {
        const [node, prob] = queue.shift();
        if (prob < maxProb[node]) continue;
        for (const [nextNode, nextProb] of graph[node]) {
            if (prob * nextProb > maxProb[nextNode]) {
                maxProb[nextNode] = prob * nextProb;
                queue.push([nextNode, maxProb[nextNode]]);
            }
        }
    }

    return maxProb[end_node];
};