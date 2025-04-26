function findMultiples(integer, limit) {
  //NOTES
  //returning array of ints
  //ints are multipls of given integer up to given limit
  
  //SOLUTION
  let output = [];   //create output array
  let currentMultiple = integer; //current multiple
​
  //add integer multiples to output array, while integer <= limit
  while(currentMultiple <= limit){
    output.push(currentMultiple);
    currentMultiple += integer
  }
  
  return output; //return output array
}
​