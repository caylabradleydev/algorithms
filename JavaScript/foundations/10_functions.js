//=================//
//====FUNCTIONS====//
//=================//

//Functions are one of the fundamental building blocks in JavaScript. A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.

//Functions allow us to write reusable and clean code, limiting how often we have to repeat ourselves

//=====FUNCTION DECLARATION=====//
//A function definition (also called a function declaration, or function statement) consists of the 'function' keyword, followed by:
// -The name of the function.
// -A list of parameters to the function, enclosed in parentheses and separated by commas.
// -The JavaScript statements that define the function, enclosed in curly braces, { /* … */ }.

//function declaration without parameter
function logger() {
  console.log("My name is Jonas"); //function body
}

logger(); //invokes/runs/calls the function

//function declaration with parameter
function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice is made with ${apples} apples and ${oranges} oranges`;

  return juice; //returns value from function
}

const punch = fruitProcessor(3, 4);
console.log(punch); //Juice is made with 3 apples and 4 oranges

const appleJuice = fruitProcessor(3, 0);
console.log(appleJuice); //Juice is made with 3 apples and 4 oranges

const orangeJuice = fruitProcessor(0, 4);
console.log(orangeJuice); //Juice is made with 3 apples and 4 oranges

//=====FUNCTION EXPRESSION=====//
//A function expression can be created by using the function keyword to define a function inside an expression.
//-function expressions, unlike function declarations, cannot be called before the function is defined

const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12

//=====ARROW FUNCTION=====//
// An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:
// -Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// -Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
// -Arrow functions cannot use yield within their body and cannot be created as generator functions.
// -Helpful in one liner functions
// -Does not require the function keyword
// implicitely returns results if one-lliner functions

const calculateAge = (birthYear) => 2037 - birthYear; //parameters only require parenthesis if there is more than one parameter

//before arrow function
let hello = function () {
  return "Hello World!";
};

//with arrow function
let goodbye = () => "Goodbye World!";

//=====FUNCTIONS CALLING OTHER FUNCTIONS=====//
function dicer(fruit) {
  return fruit * 4;
}

function juicer(apples, oranges) {
  const appleSlices = dicer(apples);
  const orangeSlices = dicer(oranges);
  const juice = `Juice with ${appleSlices} apple pieces and ${orangeSlices} orange pieces`;
  return juice;
}

console.log(juicer(5, 6));
