function multipleOfIndex(array) {
  //NOTES
  //-returning NEW array of elements that are multiples of their index
  
  
  //SOLUTION
  let multiples = []; //declare output array
  let current;
  
  if(array[0] === 0) multiples.push(array[0])
  
  //iterate through input array
  for(let i = 1; i<array.length; i++){
    current = array[i];
    
    //determine if current element is multiple of current index
    if((current % i === 0)) {
      
      //if yes, push current element to output array  
      multiples.push(current)
    }
  }
  
  return multiples //return output array
}