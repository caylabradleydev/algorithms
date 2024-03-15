// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//Notes
// -exactly one solution
// -can't use the same element more than once
// -returning array with two indices

//Questions
// -Do we have to worry about overloading?
// -Do we have to worry about invalid inputs?

const twoSum = function (nums, target) {
  let hashmap = {}; //value : index

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let difference = target - current;

    if (difference in hashmap) {
      return [i, hashmap[difference]];
    } else {
      hashmap[current] = i;
    }
  }
};
