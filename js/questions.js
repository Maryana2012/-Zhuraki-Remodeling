const plusAll= document.querySelectorAll('.question__button-plus');
plusAll.forEach(button=>{
    button.addEventListener("click", event=>{
       const questionItem = button.closest('.questions__item'); // піднімаємося до блоку li
       const hiddenText = questionItem.querySelector('.questions__article');
       const plusButton = questionItem.querySelector('.questions__icon-plus');
       const closeButton = questionItem.querySelector('.questions__icon-close');

// console.log(closeButton)
       hiddenText.classList.toggle('is-hidden');
       closeButton.classList.toggle('is-hidden');
       plusButton.classList.toggle('is-hidden');
       questionItem.classList.add('black__2-background');
       

    })
})

const closeAll = document.querySelectorAll('.questions__icon-close');

closeAll.forEach(button=>{
    button.addEventListener("click", event=>{
        const questionItem2=button.closest('.questions__item');
        const hiddenText2 = questionItem2.querySelector('.questions__article');
        const plusButton2 = questionItem2.querySelector('.questions__icon-plus');
        const closeButton2 = questionItem2.querySelector('.questions__icon-close');
 
         hiddenText2.classList.toggle('is-hidden');
         closeButton2.classList.toggle('is-hidden');
         plusButton2.classList.toggle('is-hidden');
         questionItem2.classList.remove('black__2-background');

    })
})