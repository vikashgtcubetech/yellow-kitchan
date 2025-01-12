var ham = document.querySelector("#hamburger");
var menu = document.querySelector(".menu");

ham.addEventListener(
    "click",
    function(){
        ham.classList.toggle("open-burger");
        if(menu.style.transform == ""){
            menu.style.transform = "translateX(0px)"
        }else{
            menu.style.transform = ""

        }
    }
)