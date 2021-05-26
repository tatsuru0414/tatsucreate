$('.recommend-wrapper').slick({
  infinite: true,
  slidesToShow: 4.2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


$('.header-btn').on('click', function(){
  $(".header-nav-list").toggleClass("active");
  $(".top-line, .cnt-line, .btm-line").toggleClass("open");
});

AOS.init()


  let mvh = $('.back').height();

  $(window).scroll(function() {
    let top = $(window).scrollTop();
    if (mvh < top) {
      $('.header-nav').css('background-color', 'rgba(0,0,0,0.8)');
      } else {
      $('.header-nav').css('background-color', 'rgba(0,0,0,0.0)');
    }
  });
