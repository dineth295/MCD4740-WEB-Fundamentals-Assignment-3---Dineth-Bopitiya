// CodeStitch navigation script
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav__toggle");
    const navMenu = document.querySelector(".nav__menu");

    if(navToggle){
        navToggle.addEventListener("click", () => {
            navMenu.classList.toggle("show-menu");
        });
    }
});
