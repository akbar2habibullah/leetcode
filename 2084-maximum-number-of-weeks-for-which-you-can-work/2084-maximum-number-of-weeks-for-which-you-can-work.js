/**
 * @param {number[]} milestones
 * @return {number}
 */
var numberOfWeeks = function(milestones) {
    let maxMilestones = Math.max(...milestones);
    let totalMilestones = milestones.reduce((a, b) => a + b, 0);
    
    if (maxMilestones > totalMilestones - maxMilestones) {
        return 2 * (totalMilestones - maxMilestones) + 1;
    } else {
        return totalMilestones;
    }
};