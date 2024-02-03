// Remove all the duplicates from an array

const arr = [1, 2, 9, 3, 1, 4, 5, 1, 3, 5, 7, 8, 9];

let arrNew = [];

function removeDuplicates(array) {
  const unique = [];
  for (const item in array) {
    if (unique.includes(array[item]) === false) {
      unique.push(array[item]);
    }
  }
  return unique;
}

let newUnique = removeDuplicates(arr);
console.log(`Unsorted: `, newUnique);

let newUniqueSorted = removeDuplicates(arr.sort());
console.log(`Sorted:`, newUniqueSorted);
