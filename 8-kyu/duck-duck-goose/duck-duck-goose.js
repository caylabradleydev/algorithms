function duckDuckGoose(players, goose) {
  //NOTES
  //input: array of player objects, int representing goose location
  //output: name of the chosen player (player.name)
  //circular iteration: duck_duck_goose([a, b, c, d], 5) should return a.name 
  
  //SOLUTION
  const i = (goose - 1) % players.length; //modulo for circular iterations
  
  return players[i].name //returns goose location
}