const buttonOpen = document.querySelectorAll('.modal__quote-open');
const closeModal = document.querySelector('.modal__quote-close')
const modal = document.querySelector('.backdrop__qoute');

buttonOpen.forEach(button=> button.addEventListener("click",
  (event=>{
    const clickedButton = event.currentTarget;
    
    if(clickedButton){
      toggleModal();
    }
    
  })
))

if(closeModal){
    closeModal.addEventListener("click", toggleModal);
} 

function toggleModal() {
  modal.classList.toggle("is-hidden");
}

    
