// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

//Notes
//-returning a boolean
//-both inputs contain same exact letters and be of same length

//Questions
//-can we assume inputs will always be a string?
//-do we have to worry about overload?
//-us an empty string an anagram?

//Pseudocode Solution 1 (nlogn)
// function validAnagram(s, t) {
//   t.sort()
//   s.sort()
//
//   return t === s;
// }

// Pseudocode Solution 2 (n)
// function validAnagram(s, t) {
//   if s and t not same length return false

//   charCount = {};

//   for character in s
//     charCount[character] + 1

//   for character of t
//     if character not in charCount return false
//     charCount[character] - 1

//   return true
// }

const validAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const charCount = {};

  for (let char of s) charCount[char] = 1 + (charCount[char] || 0);
  for (let char of t) {
    if (!charCount[char]) return false;
    charCount[char]--;
  }

  return true;
};
