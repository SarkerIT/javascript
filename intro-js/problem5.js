// you have some changes
// if the sum of all changes adds up to the total price, you will be able to buy
function canPay(arr, price) {
  let totalChanges = 0;

  for (let items of arr) {
    totalChanges = totalChanges + items;
  }

  if (totalChanges >= price) {
    console.log("true");
  } else {
    console.log("false");
  }
}

canPay([1, 5, 5], 10);
