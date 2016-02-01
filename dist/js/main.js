
function showPestaña() {
    var data = this.getAttribute('data-link');
    var pestana = document.getElementsByClassName('pestana');
    for (var i = 0; i < pestana.length; i++) {
        pestana[i].classList.remove('pestana-active');
    };
    pestana[data].classList.toggle('pestana-active');
}


function showMenu() {
    var menu = document.getElementsByClassName('menu');
    menu[0].classList.toggle('menu-show')
}




var links = document.getElementsByClassName('link');
for (var i = 0 ; i < links.length ; i++) {
    links[i].addEventListener('click', showPestaña);
};


//Menú
var iconMenu = document.getElementsByClassName('icon-menu');
for (var i = 0 ; i < iconMenu.length ; i++) {
    iconMenu[i].addEventListener('click', showMenu);
};