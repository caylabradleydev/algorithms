/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
        const differenceTracker = {};

    for(let i = 0; i < nums.length; i++){
        const difference = target - nums[i]
    
        if(difference in differenceTracker){
            return [i, differenceTracker[difference]];
        }
        differenceTracker[nums[i]] = i
    }
};