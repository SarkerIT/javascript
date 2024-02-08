function calculateMoney(ticketSaleNumber) {
  if (ticketSaleNumber < 0) {
    return "Invalid Number";
  } else {
    return ticketSaleNumber * 120 - (500 + 8 * 50);
  }
}

// console.log(calculateMoney(-1));
