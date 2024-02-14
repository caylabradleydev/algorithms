//==============//
//====ARRAYS====//
//==============//

//Array object: enables storing a collection of multiple items under a single variable name, and has members for performing common array operations. In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics.
// -JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// -JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// -JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// -JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
// -Array elements are object properties

//=====DECLARING ARRAYS=====//
//There are two syntaxes for creating an empty array:
let arr1 = new Array();
let arr2 = [];

const fruits = ["banana", "apple", "peach"];
console.log(fruits.length); //3

fruits.push("pear");
console.log(fruits.length); //4
console.log(fruits[3]); //pear
fruits[3] = "kiwi";
console.log(fruits[3]); //kiwi

//=====ARRAY METHODS=====//
//.push(): adds an element to the end of an array and returns length of array
//.pop(): removes an element from the end of an array and returns removed element
//.unshift(): adds an element to the beginning of an array and returns length of array
//.shift(): removes and element from the beginning of an array and returns removed element
//.indexOf(): returns the index where the element is located in the array, or returns -1 if not found
// .includes(): uses strict equality and returns a boolean denoting if the array contains the value
