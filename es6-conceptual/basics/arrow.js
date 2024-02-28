function add(x, y) {
  return x + y;
}
// console.log(add(4, 5));

// Arrow function: Implicit return

// const add2 = function (a, b) {
//   return a + b;
// };

const add2 = (a, b) => a + b;

// console.log(add2(4, 4));

// console.log(add2(2, 1));

const a = 5;
const b = 10;
var c = function (a, b) {
  return a + b;
};

function doSomethingAsync(callback) {
  // Simulating an asynchronous operation (e.g., fetching data from a server)
  setTimeout(function () {
    console.log("Async operation completed!");
    // Invoke the callback function
    callback();
  }, 1000);
}

function onAsyncCompletion() {
  console.log("Callback function executed!");
}

// Pass the callback function to the higher-order function
// doSomethingAsync(onAsyncCompletion);

// console.log(c(a, b));

let x = 10;
function abc() {
  console.log(x);
}

// abc();

const mult = (a, b, c) => a * b * c;

// console.log(mult(1, 2, 30));

// console.log(`I am a dev.
// I have no life.
// My pula distrubs me.`);

const mult2 = (a, b = 10) => a * b;
// console.log(mult2(30));

const fNames = ["auad", "ajfoija", "fjkhdja", "eurqe", "fkaja", "fjad"];

function friendsByEvenLength(names) {
  return names.filter((name) => name.length % 2 === 0);
}
const filteredNames = friendsByEvenLength(fNames);

console.log(filteredNames);
