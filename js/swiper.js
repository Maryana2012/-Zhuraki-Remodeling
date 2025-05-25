const swiperThumbs = new Swiper(".mySwiperThumbs", {
  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesProgress: true,
});

const swiper = new Swiper('.mySwiper', {
  navigation: {
    nextEl: '.custom__next',
    prevEl: '.custom__prev',
  },
  loop: true,
  spaceBetween: 20,
  autoplay: {
  delay: 2000, 
    disableOnInteraction: false, 
  },
   thumbs: {
    swiper: swiperThumbs,
  },
});

