// call by value

let x = 5;

// call by reference

let arr = [1, 2, 3];

// const modify = (a) => {
//   a = 15;
//   console.log(a);
// };

const modify1 = (a) => {
  arr.push(10);
  //   console.log(a);
};

modify(arr);
