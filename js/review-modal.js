const openModalBtn = document.querySelectorAll('.modal-open');
const closeModalBtn = document.querySelector('.modal-close');
const modal = document.querySelector('.backdrop');
// console.log(openModalBtn)
// console.log(closeModalBtn)
// console.log(modal)

openModalBtn.forEach(button=> button.addEventListener("click",
  (event=>{
    const clickedButton = event.currentTarget;
    
    if(clickedButton){
      toggleModal();
    }
    
  })
))

if(closeModalBtn){
  closeModalBtn.addEventListener("click", toggleModal);
} 

function toggleModal() {
  modal.classList.toggle("is-hidden");
}
