// Rock function
function clickRock() {
  const randomNumber = Math.random();
  let computerPick = "";

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerPick = "Rock";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerPick = "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerPick = "Scissors";
  }

  let result = "";
  if (computerPick == "Scissors") {
    result = "Great! You win.";
  } else if (computerPick == "Rock") {
    result = "Tie. ";
  } else if (computerPick == "Paper") {
    result = "You lose.";
  }

  alert(`Your move was rock. The computer picked ${computerPick}. ${result}`);
}

//paper function
function clickPaper() {
  const randomNumber1 = Math.random();
  let computerPick = "";

  if (randomNumber1 >= 0 && randomNumber1 <= 1 / 3) {
    computerPick = "Rock";
  } else if (randomNumber1 >= 1 / 3 && randomNumber1 <= 2 / 3) {
    computerPick = "Paper";
  } else if (randomNumber1 >= 2 / 3 && randomNumber1 <= 1) {
    computerPick = "Scissors";
  }

  let result = "";
  if (computerPick == "Rock") {
    result = "Great! You win.";
  } else if (computerPick == "Paper") {
    result = "Tie.";
  } else if (computerPick == "Scissors") {
    result = "You lose.";
  }

  alert(`Your move was paper. The computer picked ${computerPick}. ${result}`);
}

//scissors function

function clickScissors() {
  const randomNumber2 = Math.random();
  let computerPick = "";

  if (randomNumber2 >= 0 && randomNumber2 <= 1 / 3) {
    computerPick = "Rock";
  } else if (randomNumber2 >= 1 / 3 && randomNumber2 <= 2 / 3) {
    computerPick = "Paper";
  } else if (randomNumber2 >= 2 / 3 && randomNumber2 <= 1) {
    computerPick = "Scissors";
  }

  let result = "";
  if (computerPick == "Scissors") {
    result = "Tie";
  } else if (computerPick == "Rock") {
    result = "You lose. ";
  } else if (computerPick == "Paper") {
    result = "Great! You Win.";
  }

  alert(
    `Your move was scissors. The computer picked ${computerPick}. ${result}`
  );
}
