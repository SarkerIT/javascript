let myObj = {
  name: "John Doe",
  age: 25,
  city: "Oklahoma City",
  isStudent: true,
};

// console.log(myObj);

// let key = "";

for (let keys in myObj) {
  // key += keys + " ";
  console.log(`key: ${keys} | type: ${typeof keys}`);

  console.log(`value: ${myObj[keys]} | type: ${typeof myObj[keys]}`);
  console.log("------");
}
