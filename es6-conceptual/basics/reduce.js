const nums = [1, 2, 3, 4, 5];

let sum = 0;

for (let item of nums) {
  sum += item;
}

console.log(sum);

const sum2 = nums.reduce((preVal, currentVal) => preVal + currentVal, 0); // 0 here is initial value

console.log("sum2:", sum2);
