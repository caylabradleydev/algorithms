function grow(x){
  //NOTES
  //input: non-empty array of integer
  //output: int of multiplied values together
  
  //SOLUTION 1)
//   // initialize output int
//   let output = 1;
  
//   //iterate through input array
//   for(let i = 0; i < x.length; i++){
//     output*= x[i]; //multiply output by current element
//   }
  
//   return output //return output
​
  //SOLUTION 2)
  return x.reduce((accumulator, x) => accumulator * x)
  
}