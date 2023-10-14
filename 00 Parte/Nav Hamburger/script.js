const nav = document.querySelector('#nav');
const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');

openBtn.addEventListener('click', () => {
    nav.classList.add('visible');
})

closeBtn.addEventListener('click', () => {
    nav.classList.remove('visible');
})