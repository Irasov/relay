let menuArrows = document.querySelectorAll(".arrow");

if(menuArrows.length > 0){
    for(let i = 0; i < menuArrows.length; i++){
    const menuArrow = menuArrows[i];
    menuArrow.addEventListener('click', function(a){
      menuArrow.parentElement.classList.toggle('_active');
    });
  }
}

const menu = document.querySelector(".menu");
const iconMenu = document.querySelector(".header__icon");
if(iconMenu) {
  iconMenu.addEventListener("click", function(a){
    document.body.classList.toggle("_lock");
    menu.classList.toggle("_active");
    iconMenu.classList.toggle("_active");
  });
}

const swiper = new Swiper('.slider-community', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    spaceBetween: 40,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-customer__next',
      prevEl: '.slider-customer__prev',
    },
    slidesPerView: 1,
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
      0: {
        
      },
      498: {
      
      },
      992: {

      },
    },
  });
