/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
var restoreArray = function(adjacentPairs) {
    let graph = new Map();
    for (let [u, v] of adjacentPairs) {
        if (!graph.has(u)) graph.set(u, []);
        if (!graph.has(v)) graph.set(v, []);
        graph.get(u).push(v);
        graph.get(v).push(u);
    }

    let start;
    for (let [k, v] of graph) {
        if (v.length === 1) {
            start = k;
            break;
        }
    }

    let res = [start];
    while (res.length < adjacentPairs.length + 1) {
        let last = res[res.length - 1];
        let prev = res[res.length - 2];
        let next = graph.get(last).find(x => x !== prev);
        res.push(next);
    }
    return res;
};