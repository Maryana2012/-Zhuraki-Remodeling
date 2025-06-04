const buttonOpen = document.querySelector('.button__menu');
const buttonClose = document.querySelector('.button__menu-close')
const menu = document.querySelector('.menu-mobile-container')

buttonOpen.addEventListener("click", toggleModal);
buttonClose.addEventListener("click", toggleModal);

function toggleModal() {
    menu.classList.toggle("is-hidden");
}

