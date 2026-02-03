var countSheep = function (num){
  //num is always a positive int
  
  let str = ""
  
  for(i = 1; i <= num; i++){
      str += `${i} sheep...`
  }
  
  return str
}