function callback(name, age) {
  console.log("3. My name is", name, "& age", age);
}

function fun1(age, name) {
  console.log("1. My name is: ", name);
  console.log("2. My age is: ", age);

  callback(name, 26);
}

fun1(26, "NaNAMUme");
