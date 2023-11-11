/**
 * @param {number} n
 * @param {number[][]} relations
 * @param {number[]} time
 * @return {number}
 */
var minimumTime = function(n, relations, time) {
    let graph = new Array(n + 1).fill(0).map(() => new Array());
    let inDegree = new Array(n + 1).fill(0);
    let dist = new Array(n + 1).fill(0);

    for(let relation of relations) {
        let prevCourse = relation[0], nextCourse = relation[1];
        graph[prevCourse].push(nextCourse);
        inDegree[nextCourse]++;
    }

    let queue = [];
    for(let i = 1; i <= n; i++) {
        if(inDegree[i] === 0) {
            queue.push(i);
            dist[i] = time[i - 1];
        }
    }

    while(queue.length > 0) {
        let curr = queue.shift();
        for(let next of graph[curr]) {
            inDegree[next]--;
            dist[next] = Math.max(dist[next], dist[curr] + time[next - 1]);
            if(inDegree[next] === 0) {
                queue.push(next);
            }
        }
    }

    let res = 0;
    for(let i = 1; i <= n; i++) {
        res = Math.max(res, dist[i]);
    }

    return res;
};