const swiper = new Swiper('.accessories__slider', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,

  navigation: {
    nextEl: '.accessories__arrow-next',
    prevEl: '.accessories__arrow-prev',
  },
});

const swiperReviews = new Swiper('.reviews__slider', {
  loop: true,
  slidesPerView: 9,
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

const rangeSlider = document.querySelector('.range__slider');

noUiSlider.create(rangeSlider, {
  start: [300, 3000],
  step: 100,
  range: {
    min: 300,
    max: 3000,
  },
  format: {
    to: value => Math.round(value),
    from: value => Number(value),
  },
});
