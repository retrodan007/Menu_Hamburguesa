const menu_btn    = document.querySelector(".menu-btn");
var open_menu_bar = false;


menu_btn.addEventListener("click",() => {
    if(open_menu_bar===false) {
        menu_btn.classList.add("active");
        open_menu_bar = true;
    }
    else {
        menu_btn.classList.remove("active");
        open_menu_bar = false;
    }
}

)
