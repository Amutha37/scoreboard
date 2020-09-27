const play1Button = document.querySelector("#play1Button");
const play2Button = document.getElementById("play2Button");
const sco1 = document.querySelector("#sco1");
const sco2 = document.getElementById("sco2");
const inputTot = document.querySelector("#inputTot");
const disWinScore = document.querySelector(".playFor");
const resetbut = document.getElementById("reset");
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const winGame = document.querySelector(".winGame");
const wordTo = document.querySelector("#wordTo");
let p1score = 0;
let p2score = 0;
let endGame = false;
let chekIn = false;
let scoreWin = 0;

// Button eventlistener for player 1
if (!chekIn) {
  play1Button.addEventListener("click", function () {
    if (!endGame) {
      p1score++;
      // console.log(scoreWin, p1score, inputTot.value);
      if (p1score === scoreWin) {
        sco1.textContent = p1score;
        sco1.classList.add("winner");
        endGame = true; // game stop increment

        // winner message
        winGame.textContent = "WINNER !" + " " + player1.value;
        winGame.classList.add("endMsg");

        // win();
      }
      sco1.textContent = p1score;
    }
  });

  // Button eventlistener for player 2

  play2Button.addEventListener("click", function () {
    if (!endGame) {
      p2score++;
      if (p2score === scoreWin) {
        sco2.classList.add("winner");
        endGame = true; // game stop increment
        // winner message
        winGame.textContent = "WINNER !" + " " + player2.value;
        winGame.classList.add("endMsg");
      }
      sco2.textContent = p2score;
    }
  });
}
// score input field can be manualy change or using arrow

inputTot.addEventListener("change", function () {
  disWinScore.textContent = this.value;
  scoreWin = +this.value; //string to number ES6
  chekIn = true;

  // disWinScore.textContent = inputTot.value;
  // scoreWin = Number(inputTot.value);
  resett();
});

// button 1 names
player1.addEventListener("change", function () {
  play1Button.textContent = this.value;
});

// button 2 names
player2.addEventListener("change", function () {
  play2Button.textContent = this.value;
});

// reset all input and out fields
resetbut.addEventListener("click", function () {
  inputTot.value = 0;
  disWinScore.textContent = 0;
  chekIn = false;
  resett();
  // console.log("reset click");
});

// action for function reset...initialize fields.
function resett() {
  p1score = 0;
  p2score = 0;
  sco1.textContent = 0;
  sco2.textContent = 0;
  sco1.classList.remove("winner");
  sco2.classList.remove("winner");
  winGame.classList.remove("endMsg");
  endGame = false;
  play2Button.textContent = "Player 2";
  play1Button.textContent = "Player 1";
  player2.value = "";
  player1.value = "";
  winGame.textContent = "";
}

// function myFunction(butt) {
//   if (butt.matches) {
//     // If media query matches

//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// }

// const butt = window.matchMedia("(max-width: 740px)");
// myFunction(butt); // Call listener function at run time
// butt.addListener(myFunction); // Attach listener function on state changes

// function win() {
//   winGame.textContent = "WINNER !";
// }
// console.log(resetbut);
//  SEE THE VALUE IN CONSOLE
// let input = document.querySelector("input");
// input.value
// " 2"
