function positiveSum(arr) {
  //NOTES
  //input: array of numbers (arr)
  //output: sum of all positives
  
  //SOLUTION
  //initialize variable sum
  let sum = 0;
  
  //iterate through array
  for(let i = 0; i < arr.length; i++){
    //if element is positive number, add to sum
    if(arr[i] > 0) sum += arr[i]
    
  }
  
  return sum //return sum of positives
}