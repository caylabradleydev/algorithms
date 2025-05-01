function uefaEuro2016(teams, scores){
  //NOTES
  //input: array (teams) ['homeTeamName', 'awayTeamName'], array (scores) with int score of each team
  //output: `At match ${homeTeamName} - ${awayTeamName}, ${winningTeamName} won!`
  
  //SOLUTION
  //check if tie game
  if(scores[0] === scores[1]) return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
  
  //determine winning team index
  let winnerIndex = scores[0] > scores[1] ? 0 : 1
  return `At match ${teams[0]} - ${teams[1]}, ${teams[winnerIndex]} won!`
}