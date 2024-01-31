let age = 29;
console.log(typeof age); //number
//Number values represent floating-point numbers like 37 or -9.25.

let firstName = "John";
console.log(typeof firstName); //string
//The String object is used to represent and manipulate a sequence of characters.

let isLoggedIn = false;
console.log(typeof isLoggedIn); //boolean
//The Boolean object represents a truth value: true or false.

let unnamed;
console.log(typeof unnamed); //undefined
//A variable that has been declared but has not been assigned a value is of type undefined

let currentUser = null;
console.log(currentUser); //null; null datatype can't be tested using the typeof operator
//The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.

const hugeInteger = BigInt(9007199254740991);
console.log(typeof hugeInteger); //bigInt
//BigInt values represent numeric values which are too large to be represented by the number primitive.

const sym = Symbol();
console.log(typeof sym); //symbol
//Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique
