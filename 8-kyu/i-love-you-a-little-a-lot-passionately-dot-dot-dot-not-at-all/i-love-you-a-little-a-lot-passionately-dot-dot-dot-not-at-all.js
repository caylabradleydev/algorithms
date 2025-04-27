function howMuchILoveYou(nbPetals) {
    //NOTES
    //input: number of pedas
    //output: phrase: 
    // 1) "I love you"
    // 2) "a little"
    // 3) "a lot"
    // 4) "passionately"
    // 5) "madly"
    // 6) "not at all"
    //circular iteration. after 6 start back at 1
  
    //SOLUTION
    //initialize phrase array
    const petalPhrases = [
      "I love you",
      "a little",
      "a lot",
      "passionately",
      "madly",
      "not at all",
    ]
    
    let index = (nbPetals - 1) % petalPhrases.length //circular iteration (modulo) to determine phrase
    return petalPhrases[index]; //return phrase
}
​