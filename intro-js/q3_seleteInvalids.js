function deleteInvalids(arr) {
  if (Array.isArray(arr) !== true) return "Invalid Array";
  let arr2 = [];

  for (let item of arr) {
    // console.log(item);
    // console.log(typeof item);

    if (typeof item === "number" && Number.isNaN(item) == false) {
      arr2.push(item);
    }
  }
  return arr2;
}

// let x = deleteInvalids([3, 5, "klnjkjh", 0, 9, NaN, 1, 12, undefined]);

// console.log(x);

let x = deleteInvalids({ color: "red", price: 50 });

console.log(x);
