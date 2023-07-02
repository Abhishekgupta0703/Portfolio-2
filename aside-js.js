window.addEventListener("scroll" , () =>{
    if (document.querySelector(".aside").classList.toggle("open")){
        document.querySelector(".aside").classList.remove("open")
    }
    if (document.querySelector(".nav-toggler").classList.toggle("open")){
        document.querySelector(".nav-toggler").classList.remove("open")
    }
})
//  ============= toggle style switcher ============ 
const styleSwitcherToggle = document.querySelector(".nav-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".aside").classList.toggle("open");
    document.querySelector(".nav-toggler").classList.toggle("open");
})
