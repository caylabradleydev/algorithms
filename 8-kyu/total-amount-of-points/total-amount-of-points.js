function points(games) {
  //NOTES
  //-games is an array of strings
  //-each string is ratio of x:y (ourPoints:opponentPoints) 
  //-0 <= x <= 4
  //-0 <= y <= 4
  //-scoring 3points for wins, 0 points for losses, 1 point for ties
  //-returning our total points 
  
  //SOLUTION
  let totalPoints = 0; //tracks our total championship points
  
  //iterate through games array
  for(let i = 0; i < games.length; i++){
    
  //determine winner of current index
  //add to total points based on score
    if(parseInt(games[i][0]) > parseInt(games[i][2])){
      totalPoints+= 3; //if we win, add 3 points
    } else if(parseInt(games[i][0]) === parseInt(games[i][2])){
      totalPoints+= 1; //if we tie add 1 point
    }   
  }
  
  return totalPoints //return our total championship points
}