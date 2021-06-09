"use strict";

/*  бургер++++++++++++++========================*/
$(document).ready(function () {
  $(".menu__btn").click(function (event) {
    $(".menu__btn,.wrapper").toggleClass("wrapper__active");
    $(".cinema").toggleClass("cinema__lock");
    ;
    $(document).mouseup(function (e) {
      var div = $('.mobile__menu');

      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $(".menu__btn,.wrapper").removeClass("wrapper__active");
        $(".cinema").removeClass("cinema__lock");
      }
    });
  });
});
/*  карусель++++++++++++++========================*/

$(".owl-carousel").owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  center: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    992: {
      items: 3,
      nav: true
    }
  }
});