
      /*  бургер++++++++++++++========================*/
   $(document).ready(function() {
       $(".menu__btn").click(function(event) {
           $(".menu__btn,.wrapper").toggleClass("active");
           $(".cinema").toggleClass("lock");
       });
   });


   /*  карусель++++++++++++++========================*/
   
   $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,

        center:true,
    });
