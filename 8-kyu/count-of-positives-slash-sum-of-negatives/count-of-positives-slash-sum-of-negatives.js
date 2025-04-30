function countPositivesSumNegatives(input) {
  //NOTES
  //input: array of integers
  //output: array where first element is the count of positives, and second is sum of negatives
  //return empty array if input array is empty or null
​
  //SOLUTION
  //edge case: empty array or null
  if(input === null || input.length === 0) return [];
  
  //initialize output array [0,0]
  const output = [0,0];
  
  //iterate through array
  for(let i = 0; i < input.length; i++){
    //if positive number, output[0] += 1
    if(input[i] > 0) output[0] += 1;
    //if negative number, output[1] += array[i]
    if(input[i] < 0) output[1] += input[i];
  }
 
  return output
}