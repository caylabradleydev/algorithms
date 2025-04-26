/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumeralKey = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
    }

    let resultingInteger = 0

    for(let i = 0; i < s.length; i++){
        let currentLetter = romanNumeralKey[s[i]]
        let nextLetter = romanNumeralKey[s[i+1]]

        if(currentLetter < nextLetter){
            resultingInteger += nextLetter - currentLetter;
            i++;
        } else {
            resultingInteger += currentLetter
        }
    }

    return resultingInteger
};