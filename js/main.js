var mySwiper = new Swiper('.swiper-container', {
   slidesPerView: 1,
   navigation: {
      nextEl: '.arrow',
   },
   breakpoints:{
      540:
      {
         slidesPerView: 2
      }
   },
   loop: true,
});

var menuBtn = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuBtn.addEventListener('click', function(){
   menu.classList.toggle('header-active');
   menuBtn.classList.toggle('menu-button-active');
});