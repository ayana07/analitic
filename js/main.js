function toggleMenu() {
    let barsMenu = document.querySelector(".hamburger");
    let dropMenu = document.querySelector(".header__dropMenu");
    barsMenu.classList.toggle("is-active");
    dropMenu.classList.toggle("active-menu");
}