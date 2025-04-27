function squareOrSquareRoot(array) {
  //NOTES
  //input: array of integers
  //>>always contains positive numbers
  //output: New array
  //>>square roots if available
  //>>otherwise squared number
  
  //SOLUTION
  const output = []; //initialize output array
  let current, root;
  
  //iterate through array
  for(let i = 0; i < array.length; i ++){
    current = array[i]
  
    //find square root
    root = Math.sqrt(current)
  
    //determine if square root is int
    //if yes push square root, if not push square
    output.push(Number.isInteger(root) ? root : current*current)
  }
  
  return output;  
}