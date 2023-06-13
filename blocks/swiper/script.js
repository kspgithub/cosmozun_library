$('.clients-slider').each(function (index, el) {
    let shell = $(el);
    let slider = $('.swiper-container', shell);

    new Swiper(slider, {
      slidesPerView: 3,
      spaceBetween: 0,
      loop: true,
      breakpoints: {
        850: {
          slidesPerView: 3,
        },

        550: {
          slidesPerView: 1,
        },

        320: {
          slidesPerView: 1,
        },
      },

      pagination: {
        el: $('.swiper-pagination', shell),
        clickable: true,
      },
    });
  });





