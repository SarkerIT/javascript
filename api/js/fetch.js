fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json()) // .json is similar to JSON.parse
  .then((json) => console.log(json));

fetch("");

fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) =>
  console.log(response)
);

// lets break it down
const url = "https://jsonplaceholder.typicode.com/todos/1";

fetch(url)
  .then((response) => response.json())
  .then((json) => console.log(json));

// with a function
function loadData() {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
}
