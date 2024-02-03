// What is null in js? --> The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations

// Undefined? --> a variable has has been initialize  but not been assigned a value, or not declared at all.

// let? -->  The let declaration declares re-assignable, block-scoped local variables, optionally initializing each to a value.

// What is declaration vs. initialization vs. invocation? --> Declaration: declares the creation of variables and functions. let x;
// Initialization: assigns initial values to variables. let x=5;
// Invocation executes a piece of code. sum = x+y;

let x = 15;
let y = 10;

function add(a, b) {
  console.log("a is " + a);
  return a + b;
}

add(1, 2);
let myNum = add(12, 13);
console.log(myNum);
