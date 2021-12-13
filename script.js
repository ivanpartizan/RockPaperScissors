const playBtn = document.querySelector(".intro button");
const restartBtn = document.querySelector(".restartBtn");
const introScreen = document.querySelector(".intro");
const game = document.querySelector(".game");
const options = document.querySelectorAll(".option");
const result = document.querySelector(".result");
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
      console.log("You win");
      result.innerHTML = `${user[0].toUpperCase() + user.slice(1)} beats ${
        computer[0].toUpperCase() + computer.slice(1)
      }, you win`;
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
      console.log("You lose");
      result.innerHTML = `${
        computer[0].toUpperCase() + computer.slice(1)
      } beats ${user[0].toUpperCase() + user.slice(1)}, you lose`;
      break;

    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "lizardlizard":
    case "spockspock":
      console.log("You draw");
      result.innerHTML = `${user[0].toUpperCase() + user.slice(1)} equals ${
        computer[0].toUpperCase() + computer.slice(1)
      }, it's a draw`;
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
});
