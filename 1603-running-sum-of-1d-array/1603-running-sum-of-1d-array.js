/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const runningSumArray = new Array(nums.length);
    let currentSum = 0;
   
    for(let i = 0; i < nums.length; i++){
        currentSum += nums[i];
        runningSumArray[i] = currentSum
    }

    return runningSumArray;
};