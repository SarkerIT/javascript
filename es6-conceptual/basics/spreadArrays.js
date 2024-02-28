const number = [1, 2, 3];

const number1 = number;

number.push(4);

number1.push(100);

console.log(number);
console.log(number1);

const number2 = [];
for (let num of number) {
  number2.push(num);
}

//  spreading function with [...x] || getting the values into and new variable and new memory address
const number3 = [...number];
number2.push(200);

number3.push(300);

console.log("number:", number);
console.log("number1:", number1);
console.log("number2:", number2);
console.log("number3:", number3);

//  de-structuring
const dNum = [9, 8, 7, 6, 5, 4, 3, 2, 1];
// const [a, b, c, d] = dNum;
const [a, b, c, ...d] = dNum; //rest (remaining) operator

console.log(a, b, c, d);
