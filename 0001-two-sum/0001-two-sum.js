/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const duplicateChecker = {};
    let difference;

    for(let i = 0; i < nums.length; i++){
        difference = target - nums[i];

        if(difference in duplicateChecker) return [duplicateChecker[difference], i]
        else
            duplicateChecker[nums[i]] = i
     

    } 
};