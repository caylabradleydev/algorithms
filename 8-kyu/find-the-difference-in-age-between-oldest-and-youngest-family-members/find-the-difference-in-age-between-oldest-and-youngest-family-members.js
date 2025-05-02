function differenceInAges(ages){
  //NOTES
  //input: unsorted array (ages) in ints
  //output: new array [youngestAge, oldestAge, difference between oldest and youngest]
  
  
  //SOLUTION
  //initialize variables to track min & max
  let min = Infinity
  let max = -Infinity
  
  //iterate through array
  for(let i = 0; i < ages.length; i++){
    //if less than min, new min
    if(ages[i] < min) min = ages[i]
    //if more than max, new max
    if(ages[i] > max) max = ages[i]
  }
​
  //return output array
  return [min, max, max - min];
}
​