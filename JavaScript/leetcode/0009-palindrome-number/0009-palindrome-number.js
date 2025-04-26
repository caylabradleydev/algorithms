/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse = 0;
    let integerCopy = x;

    while(integerCopy > 0){
       const currentDigit = integerCopy % 10;
       reverse = reverse * 10 + currentDigit;
       integerCopy = Math.floor(integerCopy / 10)
    }
    return reverse === x;
};