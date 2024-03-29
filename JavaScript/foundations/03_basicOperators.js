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

//====LOGICAL OPERATORS====//
//Logical operators are typically used with Boolean (logical) values; when they are, they return a Boolean value. the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value
const hasDriversLicense = true;
const hasGoodVision = false;

//Logical AND (&&): returns true if both operands are true; otherwise, returns false
console.log(hasDriversLicense && hasGoodVision); //false

//Logical OR (||): Returns true if either operand is true; if both are false, returns false
console.log(hasDriversLicense || hasGoodVision); //true

//Logical NOT (!): Returns false if its single operand that can be converted to true; otherwise, returns true.
console.log(!hasGoodVision); //true
console.log(!hasDriversLicense); //false

//====CONDITIONAL (TERNARY) OPERATOR====//
//Conditional (Ternary) Operator: the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.
function getFee(isMember) {
  return isMember ? "$2.00" : "$10.00";
}

console.log(getFee(true)); // Expected output: "$2.00"
console.log(getFee(false)); // Expected output: "$10.00"
console.log(getFee(null)); // Expected output: "$10.00"

//====OPERATOR PRECEDENCE====//
//Operator precedence: determines how operators are parsed concerning each other. Operators with higher precedence become the operands of operators with lower precedence.
