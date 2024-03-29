let c = document.getElementById("modes");
let mind = document.querySelector(".myHeader");
//TODO:make the dark and light mode more cooler
c.onclick = function(){
    if(this.innerHTML ===`<i class="fa-solid fa-moon"></i>`){
        this.innerHTML = `<i class="fa-solid fa-sun"></i>`; 
        document.body.style.cssText = `
        background-color: var(--background_dark);
        color : var(--text_dark);
        `;
        mind.style.cssText = `
        background-color: var(--primary_dark);
        `;
    }
    else{
        this.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        document.body.style.cssText = `
        background-color: var(--background);
        color : var(--text);
        `;
        mind.style.cssText = `
        background-color: var(--primary);
        `;
    }
    
}
