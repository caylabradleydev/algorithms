function well(x){
  //NOTES
  //input: array of strings, "good" and "bad"
  //output: 
  //>>"Publish!" if 1-2 goods
  //>>"I smell a series!" if > 2 goods
  //>>"Fail!" if no goods
  
  //SOLUTION
  //initialize count variable for tracking goods
  let goodCount = 0;
  
  //iterate through input array
  for(let i = 0; i < x.length; i++){
    //if current element is 'good', count++
    if(x[i] === 'good') goodCount++
  }
    
  switch(goodCount){
    case 0: 
      return "Fail!"
    case 1:
    case 2:
      return "Publish!"
    default:
      return "I smell a series!"
  }
}