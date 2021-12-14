const playBtn = document.querySelector(".intro button");
const restartBtn = document.querySelector(".restartBtn");
const introScreen = document.querySelector(".intro");
const game = document.querySelector(".game");
const options = document.querySelectorAll(".option");
const result = document.querySelector(".result");

let userScore = 0;
let computerScore = 0;
const userScoreElement = document.querySelector("#userScore");
const computerScoreElement = document.querySelector("#computerScore");

const userScoreBtn = document.querySelector("#userScoreBtn");
const computerScoreBtn = document.querySelector("#computerScoreBtn");

options.forEach((option) => option.addEventListener("click", play));

function userPick(e) {
  return e.target.id;
}

function computerPick() {
  const options = ["rock", "paper", "scissors", "lizard", "spock"];
  const randomNumber = Math.floor(Math.random() * options.length);
  return options[randomNumber];
}

function play(e) {
  let user = userPick(e);
  let computer = computerPick();
  switch (user + computer) {
    case "scissorspaper":
    case "paperrock":
    case "rocklizard":
    case "lizardspock":
    case "spockscissors":
    case "scissorslizard":
    case "lizardpaper":
    case "paperspock":
    case "spockrock":
    case "rockscissors":
      result.innerHTML = `${user[0].toUpperCase() + user.slice(1)} beats ${
        computer[0].toUpperCase() + computer.slice(1)
      }, you win!`;
      userScore++;
      userScoreElement.innerHTML = userScore;
      userScoreBtn.classList.add("glow");
      setTimeout(() => userScoreBtn.classList.remove("glow"), 750);
      break;

    case "paperscissors":
    case "rockpaper":
    case "lizardrock":
    case "spocklizard":
    case "scissorsspock":
    case "lizardscissors":
    case "paperlizard":
    case "spockpaper":
    case "rockspock":
    case "scissorsrock":
      result.innerHTML = `${
        computer[0].toUpperCase() + computer.slice(1)
      } beats ${user[0].toUpperCase() + user.slice(1)}, you lose!`;
      computerScore++;
      computerScoreElement.innerHTML = computerScore;
      computerScoreBtn.classList.add("glow");
      setTimeout(() => computerScoreBtn.classList.remove("glow"), 750);
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
      result.innerHTML = `${user[0].toUpperCase() + user.slice(1)} equals ${
        computer[0].toUpperCase() + computer.slice(1)
      }, it's a draw!`;
      break;
  }
}

playBtn.addEventListener("click", () => {
  introScreen.classList.remove("fadeIn");
  introScreen.classList.add("fadeOut");
  game.classList.add("fadeIn");
});

restartBtn.addEventListener("click", () => {
  game.classList.remove("fadeIn");
  introScreen.classList.add("fadeIn");
  userScore = 0;
  computerScore = 0;
  userScoreElement.innerHTML = userScore;
  computerScoreElement.innerHTML = computerScore;
});
