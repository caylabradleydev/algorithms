//====================//
//====TYPE CASTING====//
//====================//

//Implicit conversion: when the compiler (for compiled languages) or runtime (for script languages like JavaScript) automatically converts data types.

//Explicit converion: when you explicitly tell JavaScript to convert a value to a specific data type using a built-in function or method

//=======TYPE CONVERSION=======//
//Type conversion (or typecasting): the conversion of values from one data type to another.

//Number(): converts values of other types to numbers
const inputYear = "1991";
console.log(inputYear + 18); //'199118' implicit
console.log(Number(inputYear) + 18); //2009 implicit

//NaN: global property is a value representing Not-A-Number
const firstName = "Cayla";
console.log(firstName + 18); //'Cayla18' implicit
console.log(Number(firstName) + 18); //NaN implicit

//String(): converts values of other types to strings
console.log(String(23), 23); //'23' 23 explicit

//=======TYPE COERCION=======//
//Type coercion: the automatic or implicit conversion of values from one data type to another (such as strings to numbers).
console.log("I am " + 29 + " years old"); //"I am 29 years old"  where 29 is type coerced into a string. implicit
console.log("23" - "10" - 3); //10 where the strings are type coerced into numbers. implicit
