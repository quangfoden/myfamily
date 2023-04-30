//menu
const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");
menuButton.addEventListener('click', () => {
    menu.classList.toggle("navbar__open") //them class navbar__open vao phan tu co class navabar__links
    menuButton.classList.toggle("open"); //them class open vao phan tu co class navabar__icons
    overlay.classList.toggle("show");
})

overlay.addEventListener('click', () => {
    menu.classList.toggle("navbar__open") //them class navbar__open vao phan tu co class navabar__links
    menuButton.classList.toggle("open"); //them class open vao phan tu co class navabar__icons
    overlay.classList.toggle("show");
})