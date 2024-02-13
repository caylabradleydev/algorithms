//=================//
//====DATATYPES====//
//=================//

//Data type refers to the type of data that a JavaScript variable can hold. Every value is either an object or a primitive

//JavaScript has dynamic typing:  a compiler or an interpreter assigns a type to all the variables at run-time. The type of a variable is decided based on its value. Programs written using dynamic-typed languages are more flexible but will compile even if they contain errors.You can also reassign a different datatype to a variable without any errors.

//The typeof operator: returns a string indicating the type of the operand's value.
console.log(typeof 42);
// Expected output: "number"

console.log(typeof "blubber");
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

//Object.is(): a static method determines whether two values are the same value.
console.log(Object.is("1", 1));
// Expected output: false

console.log(Object.is(NaN, NaN));
// Expected output: true

console.log(Object.is(-0, 0));
// Expected output: false

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
let unassigned;
console.log(typeof unassigned); //undefined

//The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
let currentUser = null;
console.log(currentUser); //null; null datatype can't be tested using the typeof operator

//BigInt values represent numeric values which are too large to be represented by the number primitive.
const hugeInteger = BigInt(9293840738593566);
console.log(typeof hugeInteger); //bigInt

//Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique
const sym = Symbol();
console.log(typeof sym); //symbol
