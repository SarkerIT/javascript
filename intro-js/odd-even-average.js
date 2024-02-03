// Find the average of the odd numbers in teh array
let arr = [1, 2, 3, 4, 5];

// -- odd: method 1
let oddCount = 0;
let oddSum = 0;

for (item in arr) {
  if (arr[item] % 2 !== 0) {
    oddSum = oddSum + arr[item];
    oddCount++;
  }
}

console.log(`The odd average method-1 is:`, oddSum / oddCount);

// odd method 2

let oddArr = [];
for (item in arr) {
  if (arr[item] % 2 !== 0) {
    oddArr.push(arr[item]);
  }
}

let sum = 0;
for (const number of oddArr) {
  sum = sum + number;
}
console.log(`The odd average method-2 is:`, sum / oddArr.length);

// --------- EVEN -----
let evenCount = 0;
let evenSum = 0;

for (item in arr) {
  if (arr[item] % 2 === 0) {
    evenSum = evenSum + arr[item];
    evenCount++;
  }
}

console.log(`The even average is:`, evenSum / evenCount);
