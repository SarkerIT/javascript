const numbers = [5, 4, 3, 2, 1];

for (let item of numbers) {
  console.log(item);
}

// callback function
numbers.forEach((item) => console.log(item));

// map function does not return the same memeroy address
