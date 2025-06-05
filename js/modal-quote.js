// const buttonOpen = document.querySelectorAll('.modal__quote-open');
// const backdrop = document.querySelector('.backdrop__qoute');
// const modal = document.querySelector('.modal__quote')
// const closeModal = document.querySelector('.modal__quote-close')
// console.log(modal)
    

// buttonOpen.forEach(el => {
//     el.addEventListener(e => {
//         backdrop.classList.remove('is-hidden');
        
//         })
// })

const buttonOpen = document.querySelectorAll('.modal__quote-open');
console.log(buttonOpen)
const closeModal = document.querySelector('.modal__quote-close')
const modal = document.querySelector('.backdrop__qoute');

buttonOpen.forEach(button=> button.addEventListener("click",
  (event=>{
    const clickedButton = event.currentTarget;
    console.log(buttonOpen)
    
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

    
