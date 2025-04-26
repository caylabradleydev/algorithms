function findSmallestInt(arr) {
  //Notes
  //-array not sorted
  //-array not empty
  //-array of integers
  
  let smallestInt = arr[0]//initialize variable for tracking smallest integer
  
  for(let i = 1; i< arr.length; i++){ //iterate through array
    if(arr[i] < smallestInt) smallestInt = arr[i];//determine if current element is new lowest
  }
  
  return smallestInt; //return smallest integer in array
}