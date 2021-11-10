

$(document).ready(function () {
   document.querySelectorAll('.about__list_item').forEach(function (element) {
      element.addEventListener('click', (e) => {
         element.classList.toggle('_active')
         // console.log(e.target.parentElement.children[1].classList[1])
         $(`.${e.target.parentElement.children[1].classList[1]}`).slideToggle();
      })
   });
});

const swiper = new Swiper('.swiper', {
   // Optional parameters
   // direction: 'vertical',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   // And if we need scrollbar
   // scrollbar: {
   //   el: '.swiper-scrollbar',
   // },
   slidesPerView: 'auto',
   spaceBetween: 30,
   breakpointsBase: 'container',
});