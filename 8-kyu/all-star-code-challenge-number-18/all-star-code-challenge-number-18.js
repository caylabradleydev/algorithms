function strCount(str, letter){  
  if(str === "") return 0;
  let count = 0;
  
  for(let i = 0; i < str.length; i++){
    if(letter === str[i]) count++
  }
  
  return count
}