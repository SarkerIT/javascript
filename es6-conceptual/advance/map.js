const nums = [1, 23, 9, 42, 76, 11];

const newNums = [];

function doubleIt(num) {
  return num * 2;
}

const doubled = nums.map(doubleIt);

console.log(doubled);

// map with arrow function
const result = nums.map((n) => n * 3);
console.log(result);

const { x, y1: a, z } = { x: 1, y1: 2, z: 3 };
console.log(a);

// What will be the output? (Try it out. It’s tricky.)

const numz = [1, 2, 3, 4, 5];
let output = numz.filter((n) => n % 2);
// console.log(output);

// console.log(true + false);
