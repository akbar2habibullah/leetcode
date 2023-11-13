/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */

class UnionFind {
    constructor(n) {
        this.parent = Array(n).fill(0).map((_, i) => i);
        this.size = Array(n).fill(1);
    }

    find(x) {
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]);
        }
        return this.parent[x];
    }

    union(x, y) {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX === rootY) {
            return false;
        }
        if (this.size[rootX] < this.size[rootY]) {
            this.parent[rootX] = rootY;
            this.size[rootY] += this.size[rootX];
        } else {
            this.parent[rootY] = rootX;
            this.size[rootX] += this.size[rootY];
        }
        return true;
    }
}

var findCriticalAndPseudoCriticalEdges = function(n, edges) {
    const m = edges.length;
    const newEdges = Array(m);
    for (let i = 0; i < m; i++) {
        newEdges[i] = [edges[i][2], edges[i][0], edges[i][1], i];
    }
    newEdges.sort((a, b) => a[0] - b[0]);

    const ufStd = new UnionFind(n);
    let value = 0;
    for (let i = 0; i < m; i++) {
        if (ufStd.union(newEdges[i][1], newEdges[i][2])) {
            value += newEdges[i][0];
        }
    }

    const critical = [];
    const pseudoCritical = [];
    for (let i = 0; i < m; i++) {
        const ufExclude = new UnionFind(n);
        let vExclude = 0;
        let eExclude = 0;
        for (let j = 0; j < m; j++) {
            if (i !== j && ufExclude.union(newEdges[j][1], newEdges[j][2])) {
                vExclude++;
                eExclude += newEdges[j][0];
            }
        }
        if (vExclude !== n - 1 || eExclude > value) {
            critical.push(newEdges[i][3]);
        } else {
            const ufInclude = new UnionFind(n);
            ufInclude.union(newEdges[i][1], newEdges[i][2]);
            let vInclude = 1;
            let eInclude = newEdges[i][0];
            for (let j = 0; j < m; j++) {
                if (i !== j && ufInclude.union(newEdges[j][1], newEdges[j][2])) {
                    vInclude++;
                    eInclude += newEdges[j][0];
                }
            }
            if (vInclude === n - 1 && eInclude === value) {
                pseudoCritical.push(newEdges[i][3]);
            }
        }
    }

    return [critical, pseudoCritical];
};