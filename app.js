let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoared_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scisors_div = document.getElementById("s"); //caching the DOM,stroring things into variables to use it again

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = (Math.floor(Math.random() * 3));
  return choices [randomNumber];
}

//console.log (getComputerChoice());
function convertToWord(letter){
    if (letter === "r") return "rock";
    if (letter === "p") return "paper";
    return "scisors";
}
//win
function  win(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}.You win`;
  userChoice_div.classList.add('green-glow');
  setTimeout(()=> userChoice_div.classList.remove('green-glow'), 300);
}
//lose
function  lose(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}.You lost....`;
  userChoice_div.classList.add('red-glow');
  setTimeout(()=>userChoice_div.classList.remove('red-glow'), 300);
}
//draw
function  draw(userChoice, computerChoice) {
  const smallUserWord = "user".fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}.its a draw.`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(()=>userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      console.log ("USER WINS.");
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      console.log ("USER LOSES.");
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      console.log ("ITS A DRAW.");
      draw(userChoice, computerChoice);
      break;
  }
}

function main () {
  rock_div.addEventListener('click', () => game("r"));
  paper_div.addEventListener('click', () => game("p"));
  scisors_div.addEventListener('click', () => game("s"));
}

main();
