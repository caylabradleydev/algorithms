function countWords(str) {  
  let newStr = str.trim().replace(/\s+/g, " ")
  if(!newStr.length) return 0
  
  let wordCount = 1
  
  for(let i = 0; i < newStr.length; i++){
    if(newStr[i] === " ") wordCount++;
  }
  
  return wordCount
}