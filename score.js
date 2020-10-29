// for refactoring create an object for both team/player
//player name
let name1 = "";
let name2 = "";
// creating objects for the 2 players
const py1 = {
  score: 0,
  button: document.querySelector("#play1Button"),
  display: document.querySelector("#sco1"),
  nameInput: document.querySelector("#player1"),
};

// for refactoring create an object for both team/player 2
const py2 = {
  score: 0,
  button: document.querySelector("#play2Button"),
  display: document.querySelector("#sco2"),
  nameInput: document.querySelector("#player2"),
};

const inputScore = document.getElementById("inputScore");
const disWinScore = document.querySelector(".playFor");

const submitBut = document.querySelector(".submitBut");
const resetbut = document.getElementById("reset");

// display winner message
const winGame = document.querySelector(".winGame");

// counter to count the score

let endGame = false;
// let chekIn = false;
let scoreWin = 0;

// refactoring by creating  a generic function to support both players or teams information under one function
const updatePlayerInfo = (player, opponent) => {
  // function updatePlayerInfo(player, opponent) {
  // check if game over
  if (!endGame) {
    player.score += 1;

    if (player.score === scoreWin) {
      endGame = true;
      // winner score hightligted in green
      // lost in red

      player.display.classList.add("winner");
      opponent.display.classList.add("lost");

      winGame.classList.add("endMsg");
    }
  }
  // sco1.textContent = p1score;
  player.display.textContent = player.score;
};

// Button eventlistener for player 1
py1.button.addEventListener("click", function () {
  updatePlayerInfo(py1, py2);
  if (endGame) {
    winGame.textContent = `WINNER ! ${name1}`;
  }
});
// Button eventlistener for player 2
py2.button.addEventListener("click", function () {
  updatePlayerInfo(py2, py1);
  if (endGame) {
    winGame.textContent = `WINNER ! ${name2}`;
  }
});

/*score input field can be manualy change or using arrow
  Enter player details
 button 1 names */
py1.nameInput.addEventListener("change", function () {
  py1.button.textContent = this.value;
  name1 = this.value;
});

// button 2 names
py2.nameInput.addEventListener("change", function () {
  py2.button.textContent = this.value;
  name2 = this.value;
});
// Selection Target score

inputScore.addEventListener("change", function () {
  // display target score
  disWinScore.textContent = this.value;
  scoreWin = +this.value; //string to number ES6
});
// RESET BUTTON SELECTED

resetbut.addEventListener("click", function () {
  resett();
});

// reset all input and out fields
function resett() {
  endGame = false;

  py1.score = 0;
  py2.score = 0;
  py1.score.textContent = 0;
  py2.score.textContent = 0;

  py1.score.classList.remove("winner", "lost");
  py2.score.classList.remove("winner", "lost");

  winGame.classList.remove("endMsg");

  py1.button.textContent = "Player 2";
  py2.button.textContent = "Player 1";
  inputScore.value = 0;

  name1 = "";
  name2 = "";

  winGame.textContent = "";
}
