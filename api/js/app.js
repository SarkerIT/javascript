// lets break it down
const url = "https://jsonplaceholder.typicode.com/users";

// with a separate function
function loadData2() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayUsers(data));
}

function displayUsers(data) {
  console.log(data);
}
