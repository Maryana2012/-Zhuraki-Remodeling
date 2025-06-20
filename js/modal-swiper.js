const modal = document.querySelector('.backdrop__swiper');
const swiperWrapper = document.querySelector('.swiper-wrapper');
const closeBtn = document.querySelector('.swiper-close');

  const galleryImages = Array.from(document.querySelectorAll('.gallery__list img'));
  const imageUrls = galleryImages.map(img => img.src);

  // Створюємо слайди в Swiper
  imageUrls.forEach(url => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
      slide.innerHTML = `<img src="${url}" alt="">`;
    //   console.log(slide)
      swiperWrapper.appendChild(slide);
      console.log(swiperWrapper)
  });

  // Ініціалізація Swiper
  const swiperInstance = new Swiper('.swiper-gallery', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 30,
    loop: false,
  });
  
// console.log(swiperInstance)
  
//   Клік на зображення галереї
  galleryImages.forEach((img, index) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      modal.classList.remove('is-hidden');
      swiperInstance.slideTo(index, 0); // працює без loop
    });
  });

//   // Закриття модалки
  closeBtn.addEventListener('click', () => {
    modal.classList.add('is-hidden');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('is-hidden');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.classList.add('is-hidden');
    }
  });