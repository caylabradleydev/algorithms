function repeatStr (n, s) {
  let output = ''
  
  while(n > 0){
    output += s
    n--
  }
  
  return output;
}