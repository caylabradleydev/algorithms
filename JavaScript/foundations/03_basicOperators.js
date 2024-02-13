//=================//
//====OPERATORS====//
//=================//

//Expression: a valid unit of code that resolves to a value
//Operators work with values to create expression

//The typeof operator: returns a string indicating the type of the operand's value.
console.log(typeof 42);
// Expected output: "number"

console.log(typeof "blubber");
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

//====ASSIGNMENT OPERATORS====//
//Assignment Operator: assigns a value to its left operand based on the value of its right operand
const now = 2024;
const ageCayla = now - 1994;
console.log(ageCayla); //30

//Addition Assignment
let year = 1994;
year += 29;
console.log(year); //2023

//Subtraction Assignment
let birthYear = 2024;
birthYear -= 29;
console.log(birthYear); //1995

//Multiplication Assignment
let ageInMonths = 29;
ageInMonths *= 12;
console.log(ageInMonths); //348

//Division Assignment
let ageInYears = 348;
ageInYears /= 12;
console.log(ageInYears); //29

//Remainder Assignment
let remainder = 16;
remainder %= 5;
console.log(remainder); //1

//The logical AND assignment (&&=): only evaluates the right operand and assigns to the left if the left operand is truthy.
const adultAge = 18;
const caylaAge = 29;
const everlyAge = 9;

let caylaIsAdult = adultAge <= caylaAge;
let everlyIsAdult = adultAge <= everlyAge;

caylaIsAdult &&= "Permitted";
everlyIsAdult &&= "Permitted";

console.log(caylaIsAdult);
console.log(everlyIsAdult);

//The logical OR assignment (||=): only evaluates the right operand and assigns to the left if the left operand is falsy.
const adult = 18;
const kerryAge = 31;
const tommyAge = 13;

let kerryIsAdult = adult <= kerryAge;
let tommyIsAdult = adult <= tommyAge;

kerryIsAdult ||= "Not Permitted";
tommyIsAdult ||= "Not Permitted";

console.log(kerryIsAdult);
console.log(tommyIsAdult);

//The nullish coalescing assignment (??=) operator: only evaluates the right operand and assigns to the left if the left operand is nullish (null or undefined).
const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50

a.speed ??= 25;
console.log(a.speed);
// Expected output: 25

//====COMPARISON OPERATORS====//
//comparison operator: compares its operands and returns a logical value based on whether the comparison is true

//Equality Operator: checks whether its two operands are equal, returning a Boolean result
console.log(1 == 1);
// Expected output: true

console.log("1" == 1);
// Expected output: true

//Strict Equality Operator: checks whether its two operands are equal, always considering operands of different types to be different.
console.log(1 === 1);
// Expected output: true

console.log("1" === 1);
// Expected output: false

//Inequality Operator: checks whether its two operands are not equal, returning a Boolean result
console.log(1 != 1);
// Expected output: false

console.log("1" != 1);
// Expected output: false

//Strict Inequality Operator: checks whether its two operands are not equal, returning a Boolean result
console.log(1 != 1);
// Expected output: false

console.log("1" != 1);
// Expected output: true

//Greater Than (>) Operator: returns true if the left operand is greater than the right operand, and false otherwise
console.log(5 > 3);
// Expected output: true

console.log(3 > 3);
// Expected output: false

//Greater than or equal (>=) operator: returns true if the left operand is greater than or equal to the right operand, and false otherwise.
console.log(5 >= 3);
// Expected output: true

console.log(3 >= 3);
// Expected output: true

//Less than (<) operator: returns true if the left operand is less than the right operand, and false otherwise.
console.log(5 < 3);
// Expected output: false

console.log(3 < 3);
// Expected output: false

//Less than or equal (<=) operator: returns true if the left operand is less than or equal to the right operand, and false otherwise.
console.log(5 <= 3);
// Expected output: false

console.log(3 <= 3);
// Expected output: true

//====OPERATOR PRECEDENCE====//
//Operator precedence: determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.