const myFrog = {
  animalType: "animal",
  englishName: "american toad",
  scientificName: "Anaxyrus americanas",
  food: "insect",
  distribution: "34 states",
};

// console.log(myFrog);

// Find the keys (will give keys)
for (let item in myFrog) {
  console.log(item);
}

// LOOPING: Find the values with dot notation (will give "undefined" because keys are not static but dynamic)
for (let item in myFrog) {
  console.log(myFrog.item);
}

// why dynamic? see below
// Simple array with specific index number is static
const arr = ["a", "b", "c"];
console.log(Object.keys(arr)); // ['0', '1', '2']

// Array-like object with keys is dynamic
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj)); // ['0', '1', '2']

// Array-like object with random key ordering (dynamic)
const anObj = { 2: "b", 7: "c", 100: "a" };
console.log(Object.keys(anObj)); // ['2', '7', '100']

// Therefore, if we want to access the value with dot notation it gives UNDEFINED; need to sue []
for (let item in myFrog) {
  console.log(myFrog.item);
}

// BUT WITH bracket notation it gives values
for (let item in myFrog) {
  console.log(myFrog[item]);
} // here in its iteration it is putting each keys as the hint to find the value

// adding a new key value pair with dot notation
myFrog.color = "green";
myFrog.color = "ash";

for (let item in myFrog) {
  console.log(myFrog);
}

console.log(myFrog.color);

// Further reading: https://www.freecodecamp.org/news/dot-notation-vs-square-brackets-javascript/#:~:text=Dot%20Notation%20is%20useful%20when,to%20dynamically%20access%20a%20property.
