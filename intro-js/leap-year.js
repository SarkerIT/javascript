// find if any year is a a leap year

function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else {
      console.log("True");
    }
  } else {
    console.log("false");
  }
}

isLeapYear(800);
