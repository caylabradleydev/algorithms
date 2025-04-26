const flip=(d, a)=>{
  //------------Notes
  //d represents the side the box is switched to (string 'L' or 'R')
  //a is an array of integers
  //each index [i] is a column
  //each integer in the array represents # of cubes in columns
  
  //TODO
  //determine if final position is left ('L') or right ('R');
  //if 'R' sort by ascending order
  //if 'L' sort by descending order
  
  return a.sort((a, b) => d === 'R' ? a - b : b - a);
}