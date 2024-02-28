// primitive data types

// Non-primitive or reference data type:
// Non-primitive data types are called reference types because they refer to objects.

// Primitive
const x = 10;
// console.log(x);

// x = 10;
// console.log(x);

// Non-primitive
const b = { name: "gcs", occupation: "student" };
const nums = [1, 2, 5, 6];

// console.log("nums", nums);

const num1 = nums;
// console.log("num1", num1);

num1.push([3, 4]);
// console.log("num1", num1);
// console.log("nums", nums);

// non-primitive data type gives reference instead of value

// ==== Truthy and Falsy value ==
const value = "";

console.log(!!value);
console.log(value);
