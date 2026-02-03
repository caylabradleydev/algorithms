function abbrevName(name){
  let string = `${name[0].toUpperCase()}.`;
  
  for(let i = 0; i < name.length; i++){
    if(name[i] === " ") return string += name[i+1].toUpperCase()
  }
}