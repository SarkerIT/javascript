let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// -- odd
let oddCount = 0;
let oddSum = 0;

for (item in arr) {
  if (arr[item] % 2 !== 0) {
    oddSum = oddSum + arr[item];
    oddCount++;
  }
}

console.log(oddSum / oddCount);

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
