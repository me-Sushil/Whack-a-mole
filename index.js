let score = 0;

let holes = document.querySelectorAll(".hole");

setInterval(function (){
  let randomNum = Math.floor(Math.random() * holes.length);
  holes[randomNum].classList.toggle("mole");
}, 750);

let missnum = 0;
let whackamole = document.getElementById("whack-a-mole");
let scoreCount = document.getElementById("score");
let miss = document.getElementById("miss");
whackamole.addEventListener("click", (event)=>{
    if(event.target.matches(".mole")){
        event.target.classList.remove("mole");
        score++;
        scoreCount.innerText = `Score : ${score}`;
    }else{
        missnum++;
        miss.innerText = `Miss : ${missnum}`;
    }
})