let mode_but = document.getElementById("modes");
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
