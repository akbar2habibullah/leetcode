/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let jobs = [];
    for (let i = 0; i < difficulty.length; i++) {
        jobs.push({ difficulty: difficulty[i], profit: profit[i] });
    }

    jobs.sort((a, b) => a.difficulty - b.difficulty);
    worker.sort((a, b) => a - b);

    let i = 0, j = 0, best = 0, maxProfit = 0;
    while (i < jobs.length) {
        if (jobs[i].difficulty <= worker[j]) {
            best = Math.max(best, jobs[i].profit);
            i++;
        } else {
            maxProfit += best;
            j++;
            if (j == worker.length) break;
        }
    }

    while (j < worker.length) {
        maxProfit += best;
        j++;
    }

    return maxProfit;
};