window.onscroll = function() {
    
    var position = window.pageYOffset  || document.documentElement.scrollTop;

    var imagen1 = document.getElementById('icon_heart');
    var imagen2 = document.getElementById('icon_fire');

    imagen1.style.bottom = position * 0.1 + 'px';
    imagen2.style.top = position * 0.1 + 'px';
}