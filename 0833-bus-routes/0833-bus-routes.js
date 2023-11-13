/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    if (source === target) return 0;

    let graph = {};
    for (let i = 0; i < routes.length; i++) {
        for (let j = 0; j < routes[i].length; j++) {
            if (!graph[routes[i][j]]) graph[routes[i][j]] = [];
            graph[routes[i][j]].push(i);
        }
    }

    let queue = [source];
    let visited = new Set();
    let buses = 0;

    while (queue.length) {
        let size = queue.length;
        buses++;
        for (let i = 0; i < size; i++) {
            let stop = queue.shift();
            for (let bus of graph[stop]) {
                if (visited.has(bus)) continue;
                visited.add(bus);
                for (let nextStop of routes[bus]) {
                    if (nextStop === target) return buses;
                    queue.push(nextStop);
                }
            }
        }
    }

    return -1;
};