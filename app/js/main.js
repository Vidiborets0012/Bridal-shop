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

const viewModeButtons = document.querySelectorAll('.view-mode__btn');
const viewModeContainer = document.querySelector('.view-mode__container');

viewModeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    viewModeButtons.forEach(b => {
      b.setAttribute('aria-pressed', 'false');
    });
    btn.setAttribute('aria-pressed', 'true');

    const mode = btn.dataset.viewMode;

    viewModeContainer.classList.remove('view-mode__container--grid', 'view-mode__container--line');

    if (mode === 'grid') {
      viewModeContainer.classList.add('view-mode__container--grid');
    } else if (mode === 'line') {
      viewModeContainer.classList.add('view-mode__container--line');
    }
  });
});
