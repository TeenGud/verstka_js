document.addEventListener('DOMContentLoaded', function() {
    const mySwiper = new Swiper('.swiper', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
   });


let list = document.querySelector('.list');
let show_or_hide_button = document.querySelector('.links-wrapper__button');
show_or_hide_button.textContent = 'Показать всё'
let showed = false;

show_or_hide_button.addEventListener('click', function () {
    if (!showed) {
        show_or_hide_button.textContent = "Скрыть";
        show_or_hide_button.classList.remove('links-wrapper__button--show');
        show_or_hide_button.classList.add('links-wrapper__button--hide');

        list.classList.add('list__element--height-auto')
        showed = true;
    } else {
        show_or_hide_button.textContent = "Показать всё";
        show_or_hide_button.classList.remove('links-wrapper__button--hide');
        show_or_hide_button.classList.add('links-wrapper__button--show');

        list.classList.remove('list__element--height-auto')
        showed = false;
    }
});