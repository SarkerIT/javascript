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

console.log(`The odd average is:`, oddSum / oddCount);
// --------- even
let evenCount = 0;
let evenSum = 0;

for (item in arr) {
  if (arr[item] % 2 === 0) {
    evenSum = evenSum + arr[item];
    evenCount++;
  }
}

console.log(evenSum / evenCount);
