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

//====SWITCH STATEMENTS====//
//Switch Statement: evaluates an expression, matching the expression’s value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression’s value.
const day = "monday";

switch (day) {
  case "monday": //day === "monday"
    console.log("Cooking Lessons");
    break;
  case "tuesday": //day === "tuesday"
    console.log("Bowling");
    break;
  case "wednesday": //day === "wednesday"
    console.log("Starbucks");
    break;
  case "thursday": //day === "thursday"
    console.log("Climbzone");
    break;
  case "friday": //day === "friday"
    console.log("Kerry's House");
    break;
  default:
    console.log("It's the weekend!");
}
