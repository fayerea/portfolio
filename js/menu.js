document.getElementById('menu-open').addEventListener("click", (event) => {
    document.getElementsByClassName('menu')[0].classList.toggle("open");
});
document.getElementById('menu-close').addEventListener("click", (event) => {
    document.getElementsByClassName('menu')[0].classList.toggle("open");

    if($('#see-more-sub').has('open'))
    {
        toggleParentSubMenu();
    }

    if($('.opleiding-submenu').has('open'))
    {
        toggleChildSubMenu();
    }

    $('#see-more-sub').removeClass('open');
    $('.opleiding-submenu').removeClass('open');
});

document.getElementById('see-more-nav').addEventListener("click", (event) => {
   toggleParentSubMenu();
})

document.getElementById('opleiding').addEventListener("click", (event) => {
   toggleChildSubMenu();
})

function toggleParentSubMenu() {
       var submenu = $('#see-more-sub');
    submenu.toggleClass("open");
    var icon = $('#see-more-nav i');
    icon.toggleClass('fa-angle-right');
    icon.toggleClass('fa-angle-down');
}

function toggleChildSubMenu() {
     var submenu = $('.opleiding-submenu');
    submenu.toggleClass("open");
    var icon = $('#opleiding i');
    icon.toggleClass('fa-angle-right');
    icon.toggleClass('fa-angle-down');
}