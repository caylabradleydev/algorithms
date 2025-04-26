function sumOfDifferences(arr) {
  //NOTES
  //-arr is array of integers
  //-Returning int sum of differences of consecutive pairs when array is in descending order
  //-Array is not originally sorted
  //-If the array is empty or the array has only one element the result should be 0
  
  
  //SOLUTION
  //if array length 0 or 1 return o
  if(arr.length === 0 || arr.length === 1) return 0
  
  //sort array in descending order
  let sum = 0; //variable to track sum of differences
  arr.sort((a, b) => b - a)
  
  //iterate through sorted array
  for(let i = 1; i < arr.length; i++){
    //add consecutive differences
    sum += arr[i-1] - arr[i];
  }
​
  return sum //return sum of consecutive differences
}