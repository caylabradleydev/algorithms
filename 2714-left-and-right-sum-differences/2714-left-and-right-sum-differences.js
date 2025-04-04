/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    const differenceArray = new Array(nums.length)
    let rightSum = 0
    let leftSum = 0;

    for(let i = 0; i < nums.length; i++){
        rightSum += nums[i] //25
    }

    for(let j = 0; j<nums.length; j++){
        rightSum -= nums[j];
        differenceArray[j] = Math.abs(leftSum - rightSum)
        leftSum += nums[j]
    }

    return differenceArray;
};