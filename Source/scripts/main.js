console.log('111')

const heroSlider = new Swiper('.js-hero-slider',{
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation:{
    prevEl:'.slider-prev',
    nextEl:'.slider-next'
  }

});

const slider = new Swiper('.js-slider',{
  slidesPerView: 3,
  spaceBetween: 24,
  adaptiveHeight: true,
  pagination: {
    el: ".swiper-pagination",
    type:"progressbar"
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
      spaceBetween: 16,
    },
    495:{
      slidesPerView: 1.6,
      spaceBetween: 16,
    },
    768:{
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
    960: {
      slidesPerView: 3,
    }
  }
});

const advSlider = new Swiper('.js-adv-slider',{
  slidesPerView: 2.3,
  spaceBetween: 44,
  pagination: {
    el: ".swiper-pagination",
    type:"progressbar"
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
      spaceBetween: 16,
    },
    495:{
      slidesPerView: 1.6,
      spaceBetween: 16,
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 24,
    },
    960: {
      slidesPerView: 2.3,
      spaceBetween: 44,
    }
  }
});

const gallerySlider = new Swiper('.js-gallery-slider',{
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation:{
    prevEl:'.slider-prev',
    nextEl:'.slider-next'
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
      spaceBetween: 16,
    },
    495:{
      slidesPerView: 2,
      spaceBetween: 16,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 24,
    }
  }
});

const articleSlider = new Swiper('.js-article-slider',{
  slidesPerView: 4,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation:{
    prevEl:'.slider-prev',
    nextEl:'.slider-next'
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
      spaceBetween: 16,
    },
    495:{
      slidesPerView: 2,
      spaceBetween: 16,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  }
});

