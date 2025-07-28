let score = 0;
let missnum = 0;
let gameInterval;
let gameTimeout;

const holes = document.querySelectorAll(".hole");
const whackamole = document.getElementById("whack-a-mole");
const scoreCount = document.getElementById("score");
const miss = document.getElementById("miss");
const btn = document.getElementById("start");
const highScore = document.querySelector(".highScore");
const timeup = document.querySelector(".highScor");

window.addEventListener("DOMContentLoaded", () => {
  const savedHighScore = JSON.parse(localStorage.getItem("highScore")) || 0;
  highScore.innerText = `High Score : ${savedHighScore}`;
});

btn.addEventListener("click", () => {
  startGame();
});

function startGame() {
  resetGame();

  gameInterval = setInterval(() => {
    let randomNum = Math.floor(Math.random() * holes.length);
    holes[randomNum].classList.toggle("mole");

    setTimeout(() => {
      holes[randomNum].classList.remove("mole");
    }, 17000);
  }, 750);

  whackamole.addEventListener("click", handleClick);

  gameTimeout = setTimeout(() => {
    endGame();
  }, 30000);
}

function handleClick(event) {
  if (event.target.matches(".mole")) {
    event.target.classList.remove("mole");
    score++;
    scoreCount.innerText = `Score : ${score}`;

    const currentHighScore = JSON.parse(localStorage.getItem("highScore")) || 0;
    if (score > currentHighScore) {
      localStorage.setItem("highScore", JSON.stringify(score));
      highScore.innerText = `High Score : ${score}`;
    }
  } else {
    missnum++;
    miss.innerText = `Miss : ${missnum}`;
  }
}

function endGame() {
  clearInterval(gameInterval);
  whackamole.removeEventListener("click", handleClick);
  timeup.innerText = `⏰Time's up!`;
}

function resetGame() {
  score = 0;
  missnum = 0;
  let valfromStorage = JSON.parse(localStorage.getItem("highScore"));
  highScore.innerText = `High Score : ${valfromStorage}`;
  scoreCount.innerText = "Score : 0";
  miss.innerText = "Miss : 0";
  timeup.innerText = "";

  clearInterval(gameInterval);
  clearTimeout(gameTimeout);

  holes.forEach((hole) => hole.classList.remove("mole"));
}
