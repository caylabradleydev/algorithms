//=============================//
//====CONDITIONAL STATEMENTS===//
//=============================//

//if/else statement: executes a block of code if a specified condition is truthy. If the condition is falsy, another block of code can be executed.

//JavaScript has the following conditional statements:
// Use if to specify a block of code to be executed, if a specified condition is true
// Use else to specify a block of code to be executed, if the same condition is false
// Use else if to specify a new condition to test, if the first condition is false
// Use switch to select one of many blocks of code to be executed

// if(){

// }else if () {

// }else {

// }

const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Give Drivers License");
} else {
  const yearsRemaining = 18 - age;
  console.log(`Not old enough to drive. Try again in ${yearsRemaining} years`);
}

const birthYear = 1994;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
