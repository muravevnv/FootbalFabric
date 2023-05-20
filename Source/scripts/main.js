console.log("111");

document.addEventListener("DOMContentLoaded", function () {
  let menuBtn = document.querySelector(".header__burger");
  let menu = document.querySelector(".js-menu");
  let menuOverlay = this.documentElement.querySelector('.header-menu__overlay')

  console.log(menu, menuBtn);

  menuBtn.addEventListener("click", function () {
    menu.classList.toggle('is-open')
  });

  menuOverlay.addEventListener('click', function(){
    if(menu.classList.contains('is-open')){
      menu.classList.remove('is-open');
    } else {
      return
    }
  })
});

let fields = document.querySelectorAll('.field');
let popups = document.querySelectorAll('.popup');
let body = document.querySelector('body')
console.log(fields)

fields.forEach(function(item){
  let itemField = item.dataset.field;
  let popupField = document.querySelector(`.popup[data-field="${itemField}"]`);
  console.log(itemField)

  item.addEventListener('click', function(){
    popupField.classList.add('active');
    body.classList.add('no-scroll')
  })

  let popupOverlay = popupField.querySelector('.popup-overlay');
  console.log(popupOverlay)
  popupOverlay.addEventListener('click', function(){
    popupField.classList.remove('active');
    body.classList.remove('no-scroll')
  })
})


let schemeFilter = document.querySelectorAll('.js-filter-lvl');
let schemeLvl = document.querySelectorAll('.js-map-lvl');

schemeFilter.forEach(function(item) {

  let dataMap = item.dataset.map;
  console.log(dataMap)
  let scheme = document.querySelector(`.js-map-lvl[data-map="${dataMap}"`)
  console.log(scheme)

  item.addEventListener('click', function(){
    schemeFilter.forEach(function(e){
      e.classList.remove('is-selected')
    })
    schemeLvl.forEach(function(e){
      e.classList.remove('is-selected')
    })
    item.classList.add('is-selected');
    scheme.classList.add('is-selected');
  })
})


const heroSlider = new Swiper(".js-hero-slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    prevEl: ".slider-prev",
    nextEl: ".slider-next",
  },
});

const slider = new Swiper(".js-slider", {
  slidesPerView: 3,
  spaceBetween: 24,
  adaptiveHeight: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    495: {
      slidesPerView: 1.6,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
    960: {
      slidesPerView: 3,
    },
  },
});

const advSlider = new Swiper(".js-adv-slider", {
  slidesPerView: 2.3,
  spaceBetween: 44,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    495: {
      slidesPerView: 1.6,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    960: {
      slidesPerView: 2.3,
      spaceBetween: 44,
    },
  },
});

const gallerySlider = new Swiper(".js-gallery-slider", {
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    prevEl: ".slider-prev",
    nextEl: ".slider-next",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    495: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});

const articleSlider = new Swiper(".js-article-slider", {
  slidesPerView: 4,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    prevEl: ".slider-prev",
    nextEl: ".slider-next",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    495: {
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
    },
  },
});

const stockSlider = new Swiper(".js-stock-slider", {
  slidesPerView: 3,
  spaceBetween: 24,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1.2,
    },
    495: {
      slidesPerView: 1.3,
    },
    768: {
      slidesPerView: 1.5,
    },
    800: {
      slidesPerView: 2,
    },
    960: {
      slidesPerView: 3,
    },
  },
});


const inputTel = document.querySelectorAll('.js-input-tel');

inputTel.forEach(function(item) {

  let mask = IMask(item, {
    mask: '+{7}(000)000-00-00'
  });
})


const selects = document.querySelectorAll('.js-select');

  
  selects.forEach(function(item) {
    let itemName = item.dataset.name;
    console.log(itemName);
      
  NiceSelect.bind(item, {
    placeholder: itemName
  })
})


const advantagesSlider = new Swiper(".js-advantages-slider", {
  slidesPerView: 'auto',
  spaceBetween: 0,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    0: {
      allowTouchMove: true,
    },
    768: {
      allowTouchMove: false,
    }
  }
});