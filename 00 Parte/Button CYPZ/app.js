const contentPadre = document.querySelector('.content--padre');
const puntero = document.querySelector('.puntero');
const puntero2 = document.querySelector('.puntero--2');
const btn = document.querySelector('.btn');
let btnGrande = false;




//  Tamaño del puntero
const ladoPuntero = 100
const ladoPunteroGrande = 150
/*--------------------- */




puntero.style.width = ladoPuntero + 'px';
puntero.style.height = ladoPuntero + 'px';
puntero.style.borderRadius = ladoPuntero + 'px';
puntero2.style.borderRadius = ladoPuntero + 'px';


contentPadre.addEventListener('mousemove', (e) => {
    const lado = btnGrande ? ladoPunteroGrande : ladoPuntero;
    puntero.style.top = (e.pageY - (lado / 2)) + 'px'
    puntero.style.left = (e.pageX - (lado / 2)) + 'px'
});

btn.addEventListener('mouseover', () => {
    puntero.style.width = ladoPunteroGrande + 'px';
    puntero.style.height = ladoPunteroGrande + 'px';
    btnGrande = true;
})

btn.addEventListener('mouseout', () => {
    puntero.style.width = ladoPuntero + 'px';
    puntero.style.height = ladoPuntero + 'px';
    btnGrande = false;
})