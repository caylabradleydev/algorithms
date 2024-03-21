// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.

//Notes
//-input array of numbers, input of target
//-find array indeces of two numbers that add to target
//-returning array of indeces
//-exactly 1 solution
//-array is sorted ascending
//-array is 1 indexed
//-can't use element more than once

//Questions
//-Should we consider overloading?
//-Do we have to worry about invalid inputs?

function twoSumTwo(numbers, target) {
  let [left, right] = [0, numbers.length - 1];

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum < target) left++;
    else if (sum > target) right--;
    else return [left + 1, right + 1];
  }
}
