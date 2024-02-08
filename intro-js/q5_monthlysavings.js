function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) !== true || typeof livingCost !== "number")
    return "invalid";

  let totalIncome = 0;
  for (let item of arr) {
    if (item >= 3000) {
      item = item * 0.8;
    }

    totalIncome = item + totalIncome;
  }

  let savings = totalIncome - livingCost;
  if (savings < 0) return "earn more";
  else return savings;
}

console.log(monthlySavings([1000, 2000, 2500], 5000));

// console.log(monthlySavings({ array: [1, 5000, 2, 3] }, 5000));
