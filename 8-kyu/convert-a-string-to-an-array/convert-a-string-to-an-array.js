function stringToArray(string){
  //NOTES
  //input: string of words
  //output: array of words
  
  //SOLUTION 1)
  //return string.split(" ")
  
  //SOLUTION 2)
  let tempString = "";
  const output = [];
  
  //iterate through string
  for(let i = 0; i < string.length; i++){
    //if current element is space
    if(string[i] === " "){
      //push temp string to array
      output.push(tempString);
      //set temp string back to empty string
      tempString = ""
      continue;
    }
    
    //add current element to temp string
    tempString += string[i];
  }
  
  output.push(tempString) //accounts for final word
  return output
  
​
}