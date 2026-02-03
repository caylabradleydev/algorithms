function reverse(string){
  let currentWord = ""
  let output = ""
  
  for(let i = string.length - 1; i >= 0; i--){
    while(string[i] !== " " && i >= 0){
      currentWord = string[i] + currentWord
      i--
    }
    
    if(i > -1) currentWord += " "
    output += currentWord
    currentWord = ""
    
    console.log(output)
  }
  
  return output;
}