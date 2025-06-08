const swiper = new Swiper('.accessories__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,

  navigation: {
    nextEl: '.accessories__slider-button--next',
    prevEl: '.accessories__slider-button--prev',
  },
});

const swiperReviews = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 16,

  pagination: {
    el: '.reviews__pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.reviews__arrow-next',
    prevEl: '.reviews__arrow-prev',
  },
});
