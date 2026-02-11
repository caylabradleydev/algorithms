function stringy(size) {
  let output = "1"
  for(let i = 1; i < size; i++){
    if(i % 2) output += "0";
    else output += "1"
  }
  
  return output
}