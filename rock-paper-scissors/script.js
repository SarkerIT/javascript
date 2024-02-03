// A general function

//generate a random number and make a computer pick
function playGame(playerMove) {
  function computerPick() {
    let computerPick = "";
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber <= 1 / 3) {
      computerPick = "Rock";
    } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
      computerPick = "Paper";
    } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
      computerPick = "Scissors";
    }
    return computerPick;
  }

  //get the computer pick to compare with your pick
  computerPick = computerPick();

  // i) get the player pick an compare with the compute3 pick
  // ii) compare and get result
  function yourMove(playerMove) {
    let result = "";
    if (playerMove == "Rock") {
      if (computerPick == "Scissors") {
        result = "Great! You win.";
      } else if (computerPick == "Rock") {
        result = "Tie. ";
      } else if (computerPick == "Paper") {
        result = "You lose.";
      }
    } else if (playerMove == "Paper") {
      if (computerPick == "Rock") {
        result = "Great! You win.";
      } else if (computerPick == "Paper") {
        result = "Tie.";
      } else if (computerPick == "Scissors") {
        result = "You lose.";
      }
    } else if (playerMove == "Scissors") {
      if (computerPick == "Scissors") {
        result = "Tie";
      } else if (computerPick == "Rock") {
        result = "You lose. ";
      } else if (computerPick == "Paper") {
        result = "Great! You Win.";
      }
    }

    alert(
      `Your move was ${playerMove}. The computer picked ${computerPick}. ${result}`
    );
  }

  // call the function to show the result
  yourMove(playerMove);
}

//-----------------------------------
