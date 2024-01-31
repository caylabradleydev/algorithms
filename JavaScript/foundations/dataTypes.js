//=================//
//====DATATYPES====//
//=================//

//Data type refers to the type of data that a JavaScript variable can hold.

//====PRIMITIVES====//
//In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties. There are 7 primitive data types:

//Number values represent floating-point numbers like 37 or -9.25.
let age = 29;
console.log(typeof age); //number

//The String object is used to represent and manipulate a sequence of characters.
let firstName = "John";
console.log(typeof firstName); //string

//The Boolean object represents a truth value: true or false.
let isLoggedIn = false;
console.log(typeof isLoggedIn); //boolean

//A variable that has been declared but has not been assigned a value is of type undefined
let unnamed;
console.log(typeof unnamed); //undefined

//The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
let currentUser = null;
console.log(currentUser); //null; null datatype can't be tested using the typeof operator

//BigInt values represent numeric values which are too large to be represented by the number primitive.
const hugeInteger = BigInt(9293840738593566);
console.log(typeof hugeInteger); //bigInt

//Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique
const sym = Symbol();
console.log(typeof sym); //symbol
