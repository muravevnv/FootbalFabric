console.log('111')

const slider = new Swiper('.slider',{
  slidesPerView: 3,
  spaceBetween: 32,
  navigation:{
    prevEl:'.slider-prev',
    nextEl:'.slider-next',
  },
  breakpoints: {
    0:{
      slidesPerView: 1,
      spaceBetween: 32,
    },
    768:{
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1024:{
      slidesPerView: 3,
      spaceBetween: 32,
    },
  }
});


$('.js-open-modal').on('click', function(){
  let id = $(this).data('modal');
  let modal = $(`.modal[data-modal=${id}]`);
  $('.modal').removeClass('active');
  modal.addClass('active');
})

$(document).on('click', '.js-close-modal, .js-overlay-modal', function() {
  $('.modal').removeClass('active');
})


$('.js-open-menu').on('click', function(){
  $('.js-menu').toggleClass('active');
  $(this).toggleClass('active');
})


$('.article-asside__item span').on('click',  function(){
  $(this).parent().toggleClass('opened');
  $(this).next().slideToggle();

})


;(function ($) { $.fn.datepicker.language['en'] = {
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  months: ['January','February','March','April','May','June', 'July','August','September','October','November','December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  today: 'Today',
  clear: 'Clear',
  dateFormat: 'mm/dd/yyyy',
  timeFormat: 'hh:ii aa',
  firstDay: 0
}; })(jQuery);
                                
// Initialize datepicker with it
$('.my-datepicker').datepicker({
language: 'ru'
});

$('button').click(function(){
var datepicker = $('.my-datepicker').data('datepicker');
datepicker.date = new Date(2018, 11, 30);
})
