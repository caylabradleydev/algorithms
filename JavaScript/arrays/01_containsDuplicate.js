//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is discinct

//Main Points
//-Returning Boolean
//-Do not have to track duplicates

//Questions
//-Can we assume elements are always numbers?
//-Can we assume input is always array?
//-Do we have to account for possible overload?

// PseudoCode
// function containsduplicates(nums){
//   let hashmap = {}

//   for element of nums
//     if element in hashmap
//       return true
//     else
//       add element to hashmap

//   return false
// }

//Solution 1 for best time complexity
const constiansDuplicate1 = (nums) => {
  const numsHashmap = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in numsHashmap) return true;
    else numsHashmap[nums[i]] = true;
  }

  return false;
};

//Solution 2 for best space complexity
const containsduplicates2 = (nums) => {};
