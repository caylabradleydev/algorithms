function toCsvText(array) {
  //NOTES
  //-given 2D array [][int]
  //-returning CSV version of given array
  //-CSV consists of:
  //>> string of comma separated values
  //>> \n denoting new line (not used on last line)
  
  //SOLUTION
  let csv = ''; //initialize output string
  let current;
  
  //Iterate though given array
  for(let i = 0; i< array.length; i++){
    //Iterate through nested array
    for(let j = 0; j<array[i].length; j++){ 
      current = array[i][j]
      
      //if not last element, add ''\n' to end
      if(i !== array.length - 1 && j == array[i].length - 1){
        csv += `${current}\n`
      } else if (j !== array[i].length - 1) {
        //add each element to output string with comma
        csv += `${current},`
      } else {
        csv += `${current}`
      }
    }
  }
​
  return csv; //return output string
}