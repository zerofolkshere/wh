window.Webflow ||= [];
window.Webflow.push(() => {
  document.querySelectorAll('.roomtype__slider').forEach(sliderRoot => {
    const swiperEl = sliderRoot.querySelector('.roomstype__slider_cms_wrap');
    if (!swiperEl) return;

    new Swiper(swiperEl, {
      /* autoplay / loop */
      loop: true,
      autoplay: {
        delay: 7000,                 // 7 s on screen
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      },

      /* core slider settings */
      slidesPerView: 1,
      spaceBetween: 24,
      speed: 1500,                   // 1.5 s travel time
      grabCursor: true,

      navigation: {
        nextEl: sliderRoot.querySelector('.is-next'),
        prevEl: sliderRoot.querySelector('.is-prev')
      },
      pagination: {
        el: sliderRoot.querySelector('.swiper-pagination'),
        clickable: true
      }
    });
  });
});
