// Remove all the duplicates from an array with for of OR for in loop

// FOR IN: The for...in loop is used to iterate over the enumerable (JUST COUNT; NO INDEX) properties of an object. It works with objects and can be used to loop through the keys of an object.

//FOR OF: The for...of loop is used to iterate over (HAVE SPECIFIC INDEX NUMBER) the values of an iterable object, such as arrays, strings, sets, and maps.
//for...of does not iterate over the properties of an object but focuses on the values.

// ALL ARRAYS ARE OBJECTS BUT ALL OBJECTS ARE NOT ARRAYS.

// METHOD 1: with "for in" loop
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
console.log(`Unsorted: `, newUnique);

let newUniqueSorted = removeDuplicates(arr.sort());
// console.log(`Sorted:`, newUniqueSorted);

// METHOD 2: with "for of' loop
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
