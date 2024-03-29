let c = document.getElementById("modes");
let mind = document.querySelector(".myHeader");
let skil = document.querySelectorAll("svg");
let skill_Pat = document.querySelectorAll("path");
let i_list = document.querySelectorAll(".skill .skill_logo");
// let con = document.querySelectorAll("")
console.log(i_list);
// let con = document.querySelectorAll("")
//TODO:make the dark and light mode more cooler
c.onclick = function () {
  if (this.innerHTML === `<i class="fa-solid fa-moon"></i>`) {
    this.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    document.body.style.cssText = `
        background-color: var(--background_dark);
        color : var(--text_dark);`;
    mind.style.cssText = `background-color: var(--primary_dark);`;
    document.getElementById("que").style.animationName = "change-color-light";
    for (let i = 0; i < skil.length; i++) {
        skil[i].style.fill = "black";
      }
    for (let i = 0; i < skill_Pat.length; i++) {
        skill_Pat[i].style.fill = "black";
      }
      for (let i = 0; i < i_list.length; i++) {
        i_list[i].style.color = "black";
      }
  } 
  else {
    this.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    document.body.style.cssText = `
        background-color: var(--background);
        color : var(--text);`;
    mind.style.cssText = `background-color: var(--primary);`;
    document.getElementById("que").style.animationName = "change-color";
    for (let i = 0; i < skil.length; i++) {
        skil[i].style.fill = "white";
      }
    for (let i = 0; i < skill_Pat.length; i++) {
        skill_Pat[i].style.fill = "white";
      }
      
    for (let i = 0; i < i_list.length; i++) {
        i_list[i].style.color = "white";
      }
      
  }
}
//TODO:make the show from the sides action
