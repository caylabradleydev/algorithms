function firstNonConsecutive (arr) {
  //NOTES
  //-arr is array of ints
  //-arr always has at least 2 characters
  //-return first non-consecutive number or null
  
  //SOLUTION
  //Iterate through array
  for(let i = 1; i< arr.length; i++){
    //If current element not consecutive, return current element
    if(arr[i] !== arr[i - 1] + 1) return arr[i]
  }
  
  return null //if no consecutive integer, return null
}