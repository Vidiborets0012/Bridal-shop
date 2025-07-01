/*const burgerMenuButoon = document.querySelector('.header__burger-menu');
const burgerMenu = document.querySelector('.header__menu-container');*/

/*burgerMenuButoon.addEventListener('click', () => {
  burgerMenu.classList.toggle('is-active');
});*/

const burgerMenuButton = document.querySelector('.burger-menu');
const burgerMenuBars = document.querySelectorAll('.burger-menu__bar');
const menuContainer = document.getElementById('headerMenuContainer');
const bodyElement = document.body;

/*burgerMenuButton.addEventListener('click', () => {
  burgerMenuButton.classList.toggle('is-active');
  menuContainer.classList.toggle('is-active');
  burgerMenuBars.forEach(bar => {
    bar.classList.toggle('is-active');
  });

  if (burgerMenuButton.classList.contains('is-active')) {
    burgerMenuButton.setAttribute('aria-expanded', 'true');
    menuContainer.setAttribute('aria-hidden', 'false');
    bodyElement.classList.add('no-scroll');
  } else {
    burgerMenuButton.setAttribute('aria-expanded', 'false');
    menuContainer.setAttribute('aria-hidden', 'true');
    bodyElement.classList.remove('no-scroll');
  }
});*/

function closeMenu() {
  if (menuContainer.classList.contains('is-active')) {
    burgerMenuButton.classList.remove('is-active');
    menuContainer.classList.remove('is-active');
    burgerMenuBars.forEach(bar => {
      bar.classList.remove('is-active');
    });

    burgerMenuButton.setAttribute('aria-expanded', 'false');
    menuContainer.setAttribute('aria-hidden', 'true');
    bodyElement.classList.remove('no-scroll');
  }
}

function openMenu() {
  burgerMenuButton.classList.add('is-active');
  menuContainer.classList.add('is-active');
  burgerMenuBars.forEach(bar => {
    bar.classList.add('is-active');
  });

  burgerMenuButton.setAttribute('aria-expanded', 'true');
  menuContainer.setAttribute('aria-hidden', 'false');
  bodyElement.classList.add('no-scroll');
}

burgerMenuButton.addEventListener('click', event => {
  event.stopPropagation();

  if (menuContainer.classList.contains('is-active')) {
    closeMenu();
  } else {
    openMenu();
  }
});

menuContainer.addEventListener('click', event => {
  const clickedElement = event.target;
  const isLink = clickedElement.tagName === 'A' || clickedElement.closest('a');

  if (!isLink) {
    closeMenu();
  }
});

document.addEventListener('click', event => {
  const isClickInsideMenu = menuContainer.contains(event.target);
  const isClickOnBurgerButton = burgerMenuButton.contains(event.target);

  if (
    menuContainer.classList.contains('is-active') &&
    !isClickInsideMenu &&
    !isClickOnBurgerButton
  ) {
    closeMenu();
  }
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuContainer.classList.contains('is-active')) {
    closeMenu();
  }
});

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
const viewModeContainer = document.querySelector('.cards-list');

viewModeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    viewModeButtons.forEach(b => {
      b.setAttribute('aria-pressed', 'false');
    });
    btn.setAttribute('aria-pressed', 'true');

    const mode = btn.dataset.viewMode;

    viewModeContainer.classList.remove('cards-list--grid', 'cards-list--line');

    if (mode === 'grid') {
      viewModeContainer.classList.add('cards-list--grid');
    } else if (mode === 'line') {
      viewModeContainer.classList.add('cards-list--line');
    }
  });
});

const rangeSlider = document.querySelector('.form-control__range-slider');
const rangeMin = document.querySelector('.form-control__input-min');
const rangeMax = document.querySelector('.form-control__input-max');

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

rangeSlider.noUiSlider.on('update', (values, handle) => {
  if (handle === 0) {
    rangeMin.value = values[0];
  } else {
    rangeMax.value = values[1];
  }
});

rangeMin.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([rangeMin.value, null]);
});

rangeMax.addEventListener('change', () => {
  rangeSlider.noUiSlider.set([null, rangeMax.value]);
});
