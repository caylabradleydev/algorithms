// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Notes:
//-all lowercase
//-same forward and backward
//-only alphnumeric characters
//-input is a String
//-returning a bolean

// Questions
//-Qo we have to account for invalid inputs?
//-Do we have to account for non-alphanumeric characters?
//-Do we have to consider overloading?
//-is an empty string a palindrome?

// Psuedo
// -Remove non-alphanumeric characters
// -change to lowercase
// -Two pointers, one at beginning one at end iterating in opposite directions
// -while pointer indeces aren't equal or don't pass eachother keep iterating
// -If letters dont match return false
// -If letters match, continue
// -while loop ends return true

function validPalindrome(s) {
  const newString = s.replace(/[\W_]/gi, ""); //removes non-alphanumeric characters and spaces

  let [i, j] = [0, newString.length - 1];

  while (i < j) {
    if (newString[i].toLowerCase() !== newString[j].toLowerCase()) return false;
    i++;
    j--;
  }

  return true;
}
