/**
 * @param {string[]} grid
 * @return {number}
 */
var shortestPathAllKeys = function(grid) {
   let m = grid.length, n = grid[0].length;
    let queue = [], visited = new Set();
    let allKeys = 0, startX = -1, startY = -1;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '@') {
                startX = i;
                startY = j;
            } else if (grid[i][j] >= 'a' && grid[i][j] <= 'f') {
                allKeys |= (1 << (grid[i][j].charCodeAt(0) - 'a'.charCodeAt(0)));
            }
        }
    }

    queue.push([startX, startY, 0, 0]);
    visited.add(startX + ',' + startY + ',' + 0);

    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (queue.length > 0) {
        let [x, y, keys, moves] = queue.shift();

        if (keys === allKeys) {
            return moves;
        }

        for (let dir of dirs) {
            let nx = x + dir[0], ny = y + dir[1];
            if (nx < 0 || nx >= m || ny < 0 || ny >= n || grid[nx][ny] === '#') {
                continue;
            }

            let cell = grid[nx][ny];
            if (cell === '.' || cell === '@') {
                if (!visited.has(nx + ',' + ny + ',' + keys)) {
                    visited.add(nx + ',' + ny + ',' + keys);
                    queue.push([nx, ny, keys, moves + 1]);
                }
            } else if (cell >= 'a' && cell <= 'f') {
                let newKeys = keys | (1 << (cell.charCodeAt(0) - 'a'.charCodeAt(0)));
                if (!visited.has(nx + ',' + ny + ',' + newKeys)) {
                    visited.add(nx + ',' + ny + ',' + newKeys);
                    queue.push([nx, ny, newKeys, moves + 1]);
                }
            } else if (cell >= 'A' && cell <= 'F') {
                if ((keys & (1 << (cell.charCodeAt(0) - 'A'.charCodeAt(0)))) !== 0) {
                    if (!visited.has(nx + ',' + ny + ',' + keys)) {
                        visited.add(nx + ',' + ny + ',' + keys);
                        queue.push([nx, ny, keys, moves + 1]);
                    }
                }
            }
        }
    }

    return -1; 
};