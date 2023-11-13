/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;

    // If the starting cell has an obstacle, then simply return as there would be
    // no paths to the destination.
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }

    // Number of ways of reaching the starting cell = 1.
    obstacleGrid[0][0] = 1;

    // Filling the values for the first column
    for(let i = 1; i < m; i++) {
        obstacleGrid[i][0] = (obstacleGrid[i][0] === 0 && obstacleGrid[i-1][0] === 1) ? 1 : 0;
    }

    // Filling the values for the first row
    for(let j = 1; j < n; j++) {
        obstacleGrid[0][j] = (obstacleGrid[0][j] === 0 && obstacleGrid[0][j-1] === 1) ? 1 : 0;
    }

    // Starting from cell(1,1) fill up the values
    // No. of ways of reaching cell[i][j] = cell[i - 1][j] + cell[i][j - 1]
    // i.e. From above and left.
    for(let i = 1; i < m; i++) {
        for(let j = 1; j < n; j++) {
            if(obstacleGrid[i][j] === 0) {
                obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
            } else {
                obstacleGrid[i][j] = 0;
            }
        }
    }

    // Return value stored in rightmost bottommost cell. That is the destination.
    return obstacleGrid[m-1][n-1];
};