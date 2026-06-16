const hero = document.querySelector(".bg-gradient-hero")
const header = document.querySelector("header")

window.addEventListener("scroll",()=>{
    if(window.scrollY >= hero.clientHeight){
        header.classList.add("header-white")
    }else{
        header.classList.remove("header-white")
    }
})