var links = document.getElementsByClassName('link');


function showPestaña() {
    var data = this.getAttribute('data-link');
    var pestana = document.getElementsByClassName('pestana');
    for (var i = 0; i < pestana.length; i++) {
        pestana[i].classList.remove('pestana-active');
    };
    pestana[data].classList.toggle('pestana-active');
}

for (var i = 0 ; i < links.length ; i++) {
    links[i].addEventListener('click', showPestaña);
};