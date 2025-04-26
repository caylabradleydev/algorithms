function multipleOfIndex(array) {
  //NOTES
  //-returning NEW array of elements that are multiples of their index
  
  
  //SOLUTION
  let multiples = []; //declare output array
  let current;
  
  //iterate through input array
  for(let i = 0; i<array.length; i++){
    current = array[i];
    
    //determine if current element is multiple of current index
    if((i === 0 & current === 0) || (current % i === 0)) {
      
      //if yes, push current element to output array  
      multiples.push(current)
    }
  }
  
  return multiples //return output array
}