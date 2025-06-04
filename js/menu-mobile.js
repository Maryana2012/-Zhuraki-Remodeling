const buttonOpen = document.querySelector('.button__menu');
const buttonClose = document.querySelector('.button__menu-close')
const modal = document.querySelector('.backdrop__menu-mobile')

buttonOpen.addEventListener("click", toggleModal);
buttonClose.addEventListener("click", toggleModal);


function toggleModal() {
    modal.classList.toggle("is-hidden");
}