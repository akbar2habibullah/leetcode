/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantDirectedConnection = function(edges) {
    let n = edges.length;
    let parent = new Array(n+1).fill(0);
    let first = [], second = [], last = [];

    for (let edge of edges) {
        if (parent[edge[1]] == 0) {
            parent[edge[1]] = edge[0];
        } else {
            first = [parent[edge[1]], edge[1]];
            second = edge;
            break;
        }
    }

    parent = new Array(n+1).fill(0);
    for (let edge of edges) {
        if (edge == second) continue;
        if (!union(parent, edge[0], edge[1])) {
            if (first.length == 0) return edge;
            else return first;
        }
    }

    return second;
};

function union(parent, i, j) {
    let p1 = find(parent, i), p2 = find(parent, j);
    if (p1 == p2) return false;
    parent[p2] = p1;
    return true;
}

function find(parent, f) {
    if (parent[f] == 0) parent[f] = f;
    while (f != parent[f]) {
        f = parent[f];
    }
    return f;
}