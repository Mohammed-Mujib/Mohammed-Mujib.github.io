let mode_but = document.getElementById("modes");
let x_mark = document.getElementById("xMark");
let popup = document.getElementById("popup");
let message_body = document.querySelector("#popup #f-message");
if (localStorage.getItem("dark_mode")) {
  if (localStorage.getItem("dark_mode")==="on") {
    document.body.classList.toggle("dark_mode");
    mode_but.innerHTML =`<i class="fa-solid fa-sun"></i>`;
  }
}
mode_but.onclick =function(){
  document.body.classList.toggle("dark_mode");
  if(document.body.classList.contains("dark_mode")){
  mode_but.innerHTML =`<i class="fa-solid fa-sun"></i>`;
  localStorage.setItem("dark_mode","on")
  }
  else{
    mode_but.innerHTML =`<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem("dark_mode","off")
  }
}
x_mark.addEventListener("click", () => {
  popup.style.display = "none";
});
let message = `This is an old portfolio from when I first started learning.
              I'm currently working on a new and improved version.
              So please don't judge me beased on that`;
let delay = 0;

message_body.innerHTML = ""; 

for (let letter of message) {
  setTimeout(() => {
    message_body.innerHTML += letter;
  }, delay);
  delay += 90; 
}
// let observer = new IntersectionObserver((enteries)=>{
//   enteries.forEach((entry)=>{
//     if(entry.isIntersecting){
//     entry.target.classList.add("show");
//   }
//     // else{
//     //   enyry.target.classList.remove("show");
//     // }
//   })
// });
// let hiddenelement = document.querySelectorAll(".hidden");
// hiddenelement.forEach((el)=>observer.observe(el));