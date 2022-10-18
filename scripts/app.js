let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".hamburger")
let menuBtnIcon = document.querySelector(".nav__icon")

menuBtn.addEventListener("click", function(){
    if(menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times nav__icon"
    }else{
        menu.style.left = "-256px"
        menuBtnIcon.classList = "fa fa-bars nav__icon"
    }
})