function defineSuit(card) {
  const map = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades',  
  }
  
  return map[card[card.length-1]]
}