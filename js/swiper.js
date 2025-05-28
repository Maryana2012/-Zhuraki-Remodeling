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

const swiperTestimonial = new Swiper('.testimonialSwiper', {
  navigation: {
    nextEl: '.testimonial__next',
    prevEl: '.testimonial__prev',
  },
  loop: true,
  spaceBetween: 20,
  autoplay: {
  delay: 2000, 
    disableOnInteraction: false, 
  },
   breakpoints: {
    375: {
      slidesPerView: 1,
    },
    744: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    }
  }

});