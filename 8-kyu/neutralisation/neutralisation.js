function neutralise(s1, s2) {
  // Here be dragons!
  let str = ""
  
  for(let i = 0; i < s1.length; i++){
    if(s1[i] === s2[i]) str += s1[i];
    else str += "0"
  }
  
  return str;
}