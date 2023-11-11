/**
 * @param {number} n
 * @param {number[][]} edges
 */
var Graph = function(n, edges) {
    this.n = n;
    this.edges = edges;
    this.graph = Array.from({length: n}, () => []);
    for (let [u, v, w] of edges) {
        this.graph[u].push({node: v, cost: w});
    }
};

/** 
 * @param {number[]} edge
 * @return {void}
 */
Graph.prototype.addEdge = function(edge) {
    let [u, v, w] = edge;
    this.graph[u].push({node: v, cost: w});
    this.edges.push(edge);
};

/** 
 * @param {number} node1 
 * @param {number} node2
 * @return {number}
 */
Graph.prototype.shortestPath = function(node1, node2) {
    let distances = Array(this.n).fill(Infinity);
        let visited = Array(this.n).fill(false);
        distances[node1] = 0;

        for (let i = 0; i < this.n - 1; i++) {
            let u = this.minDistance(distances, visited);
            visited[u] = true;

            for (let v of this.graph[u]) {
                if (!visited[v.node] && distances[u] !== Infinity && distances[u] + v.cost < distances[v.node]) {
                    distances[v.node] = distances[u] + v.cost;
                }
            }
        }

        return distances[node2] === Infinity ? -1 : distances[node2];
};

Graph.prototype.minDistance = function(distances, visited) {
           let min = Infinity;
        let minIndex = -1;

        for (let v = 0; v < this.n; v++) {
            if (!visited[v] && distances[v] <= min) {
                min = distances[v];
                minIndex = v;
            }
        }

        return minIndex;

};

/** 
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */