/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let graph = {};
    for(let ticket of tickets) {
        if(!graph[ticket[0]]) {
            graph[ticket[0]] = [];
        }
        graph[ticket[0]].push(ticket[1]);
    }

    for(let airport in graph) {
        graph[airport].sort((a, b) => a.localeCompare(b));
    }

    let result = [];
    function dfs(node) {
        let destinations = graph[node];
        while(destinations && destinations.length > 0) {
            dfs(destinations.shift());
        }
        result.unshift(node);
    }

    dfs("JFK");
    return result;
};