function first(arr, n) {
  //NOTES
  //input: array and int (n)
  //output: array of first (n) element of input array
  
  //SOLUTION
  //account for edge cases
  if(n === 0) return [];
  if(!n) n = 1;
  
  //initialize output array
  let output = [];
  
  //iterate through input array through range n
  for(let i = 0; i < n; i++){
    //account for n being larger than array length
    if(i > arr.length - 1) break;
    
    //push elements to output array
    output.push(arr[i])
  }
  
  return output //return output array
}