function password(obj) {
  // validation code here
  if (
    typeof obj.name === "undefined" ||
    typeof obj.siteName === "undefined" ||
    typeof obj.birthYear === "undefined" ||
    obj.birthYear < 1000
  ) {
    return "invalid";
  } else {
    // function code here
    let passCode = "";

    for (let item in obj) {
      passCode = `${obj.siteName}#${obj.name}@${obj.birthYear}`;
    }
    return passCode;
  }
}

// invoking the function
// console.log(
//   password({ name: "Kilomuddin", birthYear: 1000, siteName: "Google" })
// );
