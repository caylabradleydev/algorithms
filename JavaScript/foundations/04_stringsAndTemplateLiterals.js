//=================//
//====VARIABLES====//
//=================//

//Concatenation: a technique used in programming to merge two or more strings into one value

//concatenation operator (+): concatenates two or more string values together and return another string which is the union of the two operand

//Template literals: literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates.

const firstName = "Cayla";
const job = "software developer";
const birthYear = 1991;
const currentYear = 2024;

//Using Concatenation Operator
const caylaGreeting =
  "I'm " +
  firstName +
  ", a " +
  (currentYear - birthYear) +
  " year old " +
  job +
  "!";
console.log(caylaGreeting);

//Using Template Literals
const caylaGreeting2 = `I'm ${firstName}, a ${
  currentYear - birthYear
} year old ${job}!`;
console.log(caylaGreeting2);
