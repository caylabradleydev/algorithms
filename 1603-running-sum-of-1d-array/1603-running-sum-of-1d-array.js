/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const runningSumArray = new Array(nums.length);
    runningSumArray[0] = nums[0]
   
    for(let i = 1; i < nums.length; i++){
        runningSumArray[i] = nums[i] + runningSumArray[i-1]
    }

    return runningSumArray;
};