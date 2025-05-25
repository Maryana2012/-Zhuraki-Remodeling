const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  spaceBetween: 20,
  autoplay: {
  delay: 3000, 
    disableOnInteraction: false, 
  },
});

