let btnOpenWrp = document.querySelector('.header-burger-wrapper');
let btnOpen = document.querySelector('.header-burger-menu');
let menuBlock = document.querySelector('.menu-block');
let btnClose = document.querySelector('.header-burger-active');

btnOpenWrp.addEventListener('click', ()=> {
    btnOpen.style.display = "none";
    menuBlock.style.display = "flex";
})
btnClose.addEventListener('click', ()=> {
    btnOpen.style.display = "block";
    menuBlock.style.display = "none";
})