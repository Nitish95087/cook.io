/**
 * @license MIT
 * @author codewithsadee <nitishpandit95087546@gmail.com>
 * @copyright nitishpandit 2023
 */

"use strict";

const $HTML = document.documentElement;
const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;


if(sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}else{
    $HTML.dataset.theme = isDark ? "dark" : "light";
}


let /** {Boolen} */ isPressed = false;

const changeTheme = function (){
   isPressed = isPressed ? false : true;
   this.setAttribute("aria-pressed", isPressed);
   $HTML.setAttribute("data-theme", ($HTML.dataset.theme === "light")? "dark" : "light")
}

window.addEventListener("load", function(){
    const /** {Node Element} */ $themeBtn = document.querySelector("[data-theme-btn]")
    $themeBtn.addEventListener("click", changeTheme);
})
