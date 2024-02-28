function loadUsers2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers2(data));
}

function displayUsers2(users) {
  const ul = document.getElementById("users-list");
  for (const user of users) {
    console.log(user.name);
    const li = document.createElement("li");
    li.innerHTML = user.name;

    ul.append(li);
  }
}
