function findAverage(array) {
  //NOTES
  //input: array
  //ouput: average of input array
  //empty arrays return zero
  
  
  //SOLUTION
  if(array.length === 0) return 0
  
  let sum = 0//initialize sum variable
      
  //iterate through input array
  for(let i = 0; i < array.length; i++){
    //add current element to sum
    sum += array[i]
  }
  
  return sum/array.length; //return average
}