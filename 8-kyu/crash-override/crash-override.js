function aliasGen(first, last){
  if(first[0].toUpperCase() === first[0].toLowerCase() || last[0].toUpperCase() === last[0].toLowerCase()) return "Your name must start with a letter from A - Z."
  
  return `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}`
}
​