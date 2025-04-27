function gooseFilter (birds) {
  //NOTES
  //input: array of strings of bird species
  //output: array with geese species filtered out
  //elements in output array should be in same order as input array
  //some elements may be repeated
  
  const geese = new Set(["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]);
  
  //SOLUTION 1) O(m)
  //filter given array based where bird is not in geese array
  return birds.filter((bird) => !geese.has(bird))
};