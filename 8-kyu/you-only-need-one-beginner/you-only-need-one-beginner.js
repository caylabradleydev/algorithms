function check(a, x) {
  //NOTES
  //input: array (a) and value (x)
  //output: boolean if input array (a) contains input value (x)
  
  //SOLUTION 1)
  //return a.includes(x)
  
  //Solution 2)
  //iterate through array
  for(let i = 0; i < a.length; i++){
    //if character matches x, return true
    if(a[i] === x) return true
  }
   
  return false //exiting loop means no match found
  
}