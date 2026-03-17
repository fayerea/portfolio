document.getElementById('menu-open').addEventListener("click", (event) => {
    document.getElementsByClassName('menu')[0].classList.toggle("open");
});
document.getElementById('menu-close').addEventListener("click", (event) => {
    document.getElementsByClassName('menu')[0].classList.toggle("open");
});

document.getElementById('see-more-nav').addEventListener("click", (event) => {
    console.log("click");
    document.getElementsByClassName('see-more-submenu')[0].classList.toggle("open");
})

document.getElementById('opleiding').addEventListener("click", (event) => {
    console.log("click");
    document.getElementsByClassName('opleiding-submenu')[0].classList.toggle("open");
})