//=================//
//====VARIABLES====//
//=================//

//Variable: a named container for holding a value

//=======DECLARING AND INITIALIZING A VARIABLEe=======//
//In order to store a value in a variable (or initialize a variable), it must first be declared (create). Trying to initialize a variable before it is declared will cause an error. We can declare variables by using the keywords: let, const, var. Each of these keywords

let firstName; //declared but not initialized
var age; //declared but not initialized
age = 23; //initialized
const nationality = "Canadian"; //declared and initialized

//each of these key words have different use-cases and consequences

//=======NAMING CONVENTIONS=======//
//JavaScript variables are case sensitive
let lastName = "Robin Wieruch";
let LASTNAME = "Thomas Wieruch";

//Variables should be self-descriptive

// bad
var value = "Robin";

// bad
var val = "Robin";

// good
var middleName = "Robin";

//JavaScript naming convention use camelCase, although there are exceptions for JavaScript constants, privates, and classes/components
let favoriteFood = "Mac n Cheese";

//It is suggested to name Booleans with a prefix like is, are, or has, to help distinguish a boolean from another variable

// bad
let visible = true;

// good
let isVisible = true;

//it's a best practice to actually tell what the function is doing by giving the function name a verb as prefix.
// bad
function name(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

// good
function getName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

//A JavaScript class is declared with a PascalCase in contrast to other JavaScript data structures:

class SoftwareDeveloper {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

var me = new SoftwareDeveloper("Robin", "Wieruch");

//A component is declared with a PascalCase. This distinguishes itself from native HTML:

// bad
function userProfile(user) {
  return (
    <div>
      <span>First Name: {user.firstName}</span>
      <span>Last Name: {user.lastName}</span>
    </div>
  );
}

// good
function UserProfile(user) {
  return (
    <div>
      <span>First Name: {user.firstName}</span>
      <span>Last Name: {user.lastName}</span>
    </div>
  );
}

//Seeing a variable name beginning with an underscore means it is intended to be private. Even though it cannot be really enforced by JavaScript, declaring something as private tells us about how it should be used or how it should not be used.

class SoftwareDeveloper {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.name = _getName(firstName, lastName);
  }

  _getName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }
}

//constants, intended to be non-changing variables, are written in capital letters (UPPERCASE):

const SECONDS = 60;
const MINUTES = 60;
const HOURS = 24;

//=======VARIABLE SCOPE=======//
//Scope determines the accessibility (visibility) of variables. JavaScript variables have 4 types of scope:

//Block Scope: Variables declared inside a { } block cannot be accessed from outside the block.  Variables declared using const and let are block scoped
//Local Scope: Variables declared within a JavaScript function, are LOCAL to the function. Since local variables are only recognized inside their functions, variables with the same name can be used in different functions. Local variables are created when a function starts, and deleted when the function is completed. This applies to var, let, and const
//Function Scope: Variables defined inside a function are not accessible (visible) from outside the function. This applies to var, let, and const
//Global Scope: Variables declared globally (outside any function) have Global Scope, and all scripts and functions on a web page can access it. This applies to var, let, and const. If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable

//=======VARIABLE HOISTING=======//
//Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code

//Any of the following behaviors may be regarded as hoisting:

//1) Being able to use a variable's value in its scope before the line it is declared. ("Value hoisting")
//2) Being able to reference a variable in its scope before the line it is declared, without throwing a ReferenceError, but the value is always undefined. ("Declaration hoisting")
//3) The declaration of the variable causes behavior changes in its scope before the line in which it is declared.
//4) The side effects of a declaration are produced before evaluating the rest of the code that contains it.

//Var exhibits declaration hoisting, and will return undefined if you try to access it before it has been declared
//Variables declared with let or const are hoisted WITHOUT a default initialization. So accessing them before the line they were declared throws ReferenceError: Cannot access 'variable' before initialization.
//Temporal Dead Zone: the period during execution where let/const variables are hoisted but not accessible

//=======SUMMARY=======//
//The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.
//The let declaration declares a block-scoped local variable, optionally initializing it to a value.
//Constants are block-scoped. The value of a constant can’t be changed through reassignment and it can’t be redeclared
