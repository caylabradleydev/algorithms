//=============//
//====LOOPS====//
//=============//

//Loops offer a quick and easy way to do something repeatedly for a designated number of times

//=====FOR LOOP=====//
//for loop: a standard control-flow construct commonly used to iterate over given sequences or iterate a known number of times and execute a piece of code for each iteration.

//=====FOR STATEMENT=====//
//for statement: creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons: initialization, doncition, afterthought
//-initialization: An expression (including assignment expressions) or variable declaration evaluated once before the loop begins. Typically used to initialize a counter variable.
//-condition: An expression to be evaluated before each loop iteration
//- afterthought: An expression to be evaluated at the end of each loop iteration.

let str = "";

//for (initialization; condition; afterthought)
for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str); //"012345678"

//=====BREAK AND CONTINUE=====//
//break statement: without a label reference, can only be used to jump out of a loop or a switch block.
let i = 0;

while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}

console.log(i); //3

//continue statement: with or without a label reference, can only be used to skip one loop iteration.
let message = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  message = message + i;
}

console.log(message);
// Expected output: "012456789"

//=====LABELED STATEMENT=====//
//Labeled Statement: JavaScript label statements are used to prefix a label to an identifier. It can be used with break and continue statement to control the flow more precisely. A label is simply an identifier followed by a colon(:) that is applied to a block of code.

// The first for statement is labeled "loop1"
loop1: for (let i = 0; i < 3; i++) {
  // The second for statement is labeled "loop2"
  loop2: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue loop1;
    }
    console.log(`i = ${i}, j = ${j}`);
  }
}

//=====WHILE STATEMENT=====//
//While statement: The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

let n = 0;

while (n < 3) {
  n++;
}

console.log(n); // Expected output: 3

//=====DO...WHILE STATEMENT=====//
//The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
let result = "";
let j = 0;

do {
  j = j + 1;
  result = result + j;
} while (j < 5);

console.log(result); //"12345"

//=====FOR...IN STATEMENT=====//
//The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}
// "a: 1"
// "b: 2"
// "c: 3"

//=====FOR...OF STATEMENT=====//
//The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object
const array1 = ["a", "b", "c"];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
