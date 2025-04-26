function invert(array) {
  //NOTES
  //given array of ints
  //returning new array with inverse elements [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
  //do not mutate input array
  
  //SOLUTION
  let output = []; //declare output array
  
  //iterate through input array
  for(let i = 0; i<array.length; i++){
    
    //add inverse element to output array
    output.push(-(array[i]))
  }
  
  return output;   //return output array
​
}