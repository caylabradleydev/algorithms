function distinct(a) {
  //NOTES
  //input: array of non-negative numbers
  //output: same array with duplicate values removed
  //[1, 1, 2] -> [1, 2]
  
  //SOLUTION
  //initiate hashmap to track duplicates
  let duplicateChecker = {};
  let output = [];
  
  //iterate through array
  for(let i = 0; i < a.length; i++){
    //if duplicate, remove
    if(a[i] in duplicateChecker) continue;
    //otherwise add to hashmap
    output.push(a[i]);
    duplicateChecker[a[i]] = true;
  }
​
  return output //return output array
}