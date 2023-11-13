/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if (intervals.length === 0) {
        return 0;
    }

    // Sort the intervals by their end times
    intervals.sort((a, b) => a[1] - b[1]);

    let end = intervals[0][1];
    let count = 0;

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < end) {
            // The current interval overlaps with the previous one, so remove it
            count++;
        } else {
            // Update the end time
            end = intervals[i][1];
        }
    }

    return count;
};