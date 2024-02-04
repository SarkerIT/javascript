let shoppingList = [
  "pencil",
  "notebook",
  "eraser",
  "pen",
  "marker",
  "permanent marker",
  "paper-clip",
];

console.log(shoppingList);

shoppingList.pop();
console.log(shoppingList);

shoppingList.push("binder");
console.log(shoppingList);

shoppingList.shift();
console.log(shoppingList);
shoppingList.unshift("Dry-erase marker");
console.log(shoppingList);

let a = null;
console.log(typeof a);

// -----------
function sorted(arr) {
  const [a, b] = arr;
  if (a > b) {
    console.log("A is greater");
  }
}
