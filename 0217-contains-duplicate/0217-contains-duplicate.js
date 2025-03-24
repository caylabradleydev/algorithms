/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const duplicateTracker = {};

    for(let i = 0; i<nums.length; i++){
        if(nums[i] in duplicateTracker) return true
        else duplicateTracker[nums[i]] = true;
    }

    return false;
};