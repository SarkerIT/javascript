// Remove all the duplicates from an array

// with "for in" loop
const arr = [1, 2, 9, 3, 1, 4, 5, 1, 3, 5, 7, 8, 9];

let arrNew = [];

function removeDuplicates(array) {
  const unique = [];
  for (const item in array) {
    // console.log(item);
    if (unique.includes(array[item]) === false) {
      unique.push(array[item]);
    }
  }
  return unique;
}

let newUnique = removeDuplicates(arr);
// console.log(`Unsorted: `, newUnique);

let newUniqueSorted = removeDuplicates(arr.sort());
// console.log(`Sorted:`, newUniqueSorted);

// with "for of' loop
const arr2 = [1, 2, 3, 4, 1, 2, 3, 4, 5];

function removeDuplicates2(array) {
  const newUniqueArr = [];
  for (item of array) {
    if (newUniqueArr.includes(item) === false) {
      newUniqueArr.push(item);
    }
  }
  return newUniqueArr;
}

let result = removeDuplicates2(arr2);
console.log(result);

// quiz 21.2
// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, 100);
// }

// console.log(Math.sqrt(16));
