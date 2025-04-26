function warnTheSheep(queue) {
  //Notes
  //array of 'sheep' and 1 'wolf'
  //returning strings based on wolf's location
  //will always be 1 wolf
  //top of queue is consifered location 1
  
  //if wolf is queue[queue.length-1] return "Pls go away and stop eating my sheep"
  if(queue[queue.length-1] === 'wolf') return "Pls go away and stop eating my sheep";
  
  let i = queue.length-1; //starting index of loop
  let currentLocation = 0; //tracks location in queue
  
  while(i >= 0){  //iterate through queue to determine location of wolf
    currentLocation++; //marks current location in queue
    
    //determine location of wolf and return endangered sheep
    if(queue[i] === 'wolf') {
      return `Oi! Sheep number ${currentLocation - 1}! You are about to be eaten by a wolf!`
    }
    
    i--
  }
}