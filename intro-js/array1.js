let myArray = [10, 20, 30, 40, 50, 60];

console.log(myArray);

// print with specific index number
console.log(myArray[3]); // will print 40

// delete a value in eh arry without index #

let spliced = myArray.splice(1, 2);
console.log(myArray);

console.log(spliced);

// How to print an array as a single line or string
// ANS: i. Declare an empty string
// ii. Loop over the array and put each item in string
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + ", ";
  console.log(cars[i]);
}

// single line printing
console.log(text);
