function checkName(name) {
  if (typeof name !== "string") return "invalid";
  name = name.toLowerCase();

  let size = name.length;
  if (
    name[size - 1] === "a" ||
    name[size - 1] === "e" ||
    name[size - 1] === "i" ||
    name[size - 1] === "o" ||
    name[size - 1] === "u" ||
    name[size - 1] === "y" ||
    name[size - 1] === "w"
  ) {
    return "Good name";
  } else {
    return "Bad Name";
  }
}

// console.log(checkName());
