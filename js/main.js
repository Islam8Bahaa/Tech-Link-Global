$(document).ready(function() {
    $('#header').load('header.html', function() {
        // Code to execute after the header is loaded
        $('.main-menu').slicknav({
            prependTo: ".mobile-nav",
            label: '',
            duration: 500,
            easingOpen: "easeOutBounce",
        });
    });
    $('#footer').load('footer.html');

    $('.learn-more').on('click', function(e) {
      e.preventDefault();
      
      var textContainer = $(this).closest('.text');

      textContainer.find('.full-description').toggle();
      $('#carouselExampleIndicators').carousel('pause');
      setTimeout(function() {
          $('#carouselExampleIndicators').carousel('cycle');
      }, 30000);
  });
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        },
      });
});