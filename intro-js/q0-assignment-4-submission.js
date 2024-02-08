// q1
function calculateMoney(ticketSaleNumber) {
  if (ticketSaleNumber < 0) {
    return "Invalid Number";
  } else {
    return ticketSaleNumber * 120 - (500 + 8 * 50);
  }
}

// q2
function checkName(name) {
  if (typeof name !== "string") return "invalid";
  name = name.toLowerCase();

  let size = name.length;
  if (
    name[size - 1] === "a" ||
    name[size - 1] === "e" ||
    name[size - 1] === "i" ||
    name[size - 1] === "o" ||
    name[size - 1] === "u" ||
    name[size - 1] === "y" ||
    name[size - 1] === "w"
  ) {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}

// q3
function deleteInvalids(arr) {
  if (Array.isArray(arr) !== true) return "Invalid Array";
  let arr2 = [];

  for (let item of arr) {
    if (typeof item === "number" && Number.isNaN(item) == false) {
      arr2.push(item);
    }
  }
  return arr2;
}

// q4
function password(obj) {
  // validation code here
  if (
    typeof obj.name === "undefined" ||
    typeof obj.siteName === "undefined" ||
    typeof obj.birthYear === "undefined" ||
    obj.birthYear < 1000
  ) {
    return "invalid";
  } else {
    // function code here
    let passCode = "";

    for (let item in obj) {
      passCode = `${
        obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1)
      }#${obj.name}@${obj.birthYear}`;
    }
    return passCode;
  }
}

// q5
function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) !== true || typeof livingCost !== "number")
    return "invalid input";

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

// Testing
// console.log(calculateMoney(93));
// console.log(checkName(199));
// console.log(deleteInvalids({ num: [1, 2, 3] }));
// console.log(password({ name: "maisha", birthYear: 2002 }));
// console.log(monthlySavings(100, [900, 2700, 3400]));
