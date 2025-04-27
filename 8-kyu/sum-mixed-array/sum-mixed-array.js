function sumMix(x){
  //NOTES
  //input: array of ints represented as strings and numbers
  //output: sum of array ints
   
  //SOLUTION
  //initialize sum variable
  let sum = 0;
  
  //iterate through input array
  for(let i = 0; i < x.length; i++){
  //add current element to sum using type conversion
    sum += +x[i]
  }
  
  return sum
}