let mode_but = document.getElementById("modes");
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
let observer = new IntersectionObserver((enteries)=>{
  enteries.forEach((entry)=>{
    if(entry.isIntersecting){
    entry.target.classList.add("show");
  }
    // else{
    //   enyry.target.classList.remove("show");
    // }
  })
});
let hiddenelement = document.querySelectorAll(".hidden");
hiddenelement.forEach((el)=>observer.observe(el));