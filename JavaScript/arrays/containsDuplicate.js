// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums= [1, 2, 3, 4]
// Output: false
// Explanation: There are no duplicates in the given array.
// Example 2:

// Input: nums= [1, 2, 3, 1]
// Output: true
// Explanation: '1' is repeating.

function containsDuplicate(nums) {
  const duplicateTracker = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in duplicateTracker) return true;
    else duplicateTracker[nums[i]] = true;
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
