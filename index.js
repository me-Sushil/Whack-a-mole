let score = 0;

let holes = document.querySelectorAll(".hole");

setInterval(function (){
  let randomNum = Math.floor(Math.random() * holes.length);
  holes[randomNum].classList.toggle("mole");
}, 450);

let whackamole = document.getElementById("whack-a-mole");

whackamole.addEventListener("click", (event)=>{
    

})