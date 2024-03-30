let mode_but = document.getElementById("modes");
let mind = document.querySelector(".myHeader");
let skil = document.querySelectorAll("svg");
let skill_Pat = document.querySelectorAll("path");
let i_list = document.querySelectorAll(".skill .skill_logo");
let con = document.querySelectorAll(".socil")
console.log(con);
// let con = document.querySelectorAll("")
//TODO:make the dark and light mode more cooler

mode_but.onclick =function(){
  document.body.classList.toggle("dark_mode");
  if(document.body.classList.contains("dark_mode")){
  mode_but.innerHTML =`<i class="fa-solid fa-sun"></i>`;
  }
  else{
    mode_but.innerHTML =`<i class="fa-solid fa-moon"></i>`;
  }
  }
//TODO:make the show from the sides action
