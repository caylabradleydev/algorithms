function fakeBin(x){
  //NOTES
  //input: string of digits
  //input will never be an empty string
  //output: string with digit < 5 replaced with 0, digit >= 5 replaced with 1
  
  //SOLUTION
  //initialize output string
  let output = "";
  
  //iterate through given string
  for(let i = 0; i < x.length; i++){
    //if element < 5, add 0 to output string
    if(+x[i] < 5) output+=0
    //if element >= 5, add 1 to output string
    else output+=1
  }
​
  return output
}