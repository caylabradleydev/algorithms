function removeEveryOther(arr){
  //NOTES
  //input: array of unspecified elements
  //will never be empty
  //output: array with every second element removed
  
  //SOLUTION 1)
  //initialize output array
  const output = [];
  
  //iterate through input array
  for(let i = 0; i < arr.length; i+=2){
    //add every other first element to output array
    output.push(arr[i])
  }
  
  return output //return input array
}