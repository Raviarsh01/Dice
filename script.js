let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let winner = document.getElementById("winner");

function button_1() {
  score_value1 = Math.floor(Math.random() * 6) + 1;

  let img1 = `img/dice${score_value1}.png`;
  score1.setAttribute("src", img1);

  score_value2 = Math.floor(Math.random() * 6) + 1;
  let img2 = `img/dice${score_value2}.png`;
  score2.setAttribute("src", img2);

  score2.innerHTML = score_value2;
  if (score_value1 > score_value2) {
    winner.innerHTML = "First player winnner";
  } else if (score_value1 < score_value2) {
    winner.innerHTML = "Second player winnner";
  }
  if (score_value1 === score_value2) {
    winner.innerHTML = "No winner";
  }
}
