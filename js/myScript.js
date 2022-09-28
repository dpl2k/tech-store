// Add slideDown animation to Bootstrap dropdown when expanding.
$('.dropdown').on('show.bs.dropdown', function () {
   $(this).find('.dropdown-menu').slideDown();
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function () {
   $(this).find('.dropdown-menu').slideUp();
});


function makeTimer() {
   //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
   var endTime = new Date("31 December 2022 23:59:59 GMT+07:00");
   endTime = (Date.parse(endTime) / 1000);

   var now = new Date();
   now = (Date.parse(now) / 1000);

   var timeLeft = endTime - now;

   var days = Math.floor(timeLeft / 86400);
   var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
   var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
   var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

   if (hours < "10") { hours = "0" + hours; }
   if (minutes < "10") { minutes = "0" + minutes; }
   if (seconds < "10") { seconds = "0" + seconds; }

   $(".days").html(days);
   $(".hours").html(hours);
   $(".minutes").html(minutes);
   $(".seconds").html(seconds);

}
setInterval(function () { makeTimer(); }, 1000);

$(document).ready(function () {
   $(".owl-one, .owl-two").owlCarousel({
      autoplay: true,
      autoPlaySpeed: 5000,
      autoPlayTimeout: 5000,
      autoplayHoverPause: true,
      rewind: true,
      loop: false,
      margin: 10,
      dots: false,
      nav: false,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 3,
         },
      },
   });

   $(".owl-three").owlCarousel({
      loop: false,
      margin: 10,
      dots: false,
      nav: true,
      responsiveClass: true,
      responsive: {
         0: {
            items: 2,
         },
         600: {
            items: 3,
         },
         1000: {
            items: 4,
         },
      },
   });

   $(".owl-four").owlCarousel({
      loop: false,
      margin: 10,
      dots: false,
      nav: false,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 3,
         },
      },
   });

   $(".owl-seven").owlCarousel({
      autoplay: true,
      autoPlaySpeed: 5000,
      autoPlayTimeout: 5000,
      autoplayHoverPause: true,
      rewind: true,
      loop: true,
      margin: 10,
      dots: false,
      nav: false,
      responsiveClass: true,
      responsive: {
         0: {
            items: 2,
         },
         600: {
            items: 3,
         },
         1000: {
            items: 5,
         },
      },
   });

   $(".owl-eight").owlCarousel({
      loop: false,
      margin: 10,
      dots: false,
      nav: true,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 3,
         },
      },
   });

   $(".owl-nine").owlCarousel({
      loop: false,
      margin: 10,
      dots: false,
      nav: true,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
         },
         760: {
            items: 2,
         },
         1000: {
            items: 2,
         },
      },
   });

   $(".owl-ten").owlCarousel({
      loop: false,
      margin: 10,
      dots: false,
      nav: true,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
         },
         760: {
            items: 1,
         },
         1000: {
            items: 2,
         },
      },
   });

   // $(".owl-12").owlCarousel({
   //    loop: true,
   //    margin: 10,
   //    dots: false,
   //    nav: false, 
   //    items:1
   // });

   // $(".owl-13").owlCarousel({
   //    loop: true,
   //    margin: 1,
   //    dots: false,
   //    nav: true,
   //    addClassActive: true,
   //    items: 2
   // });

   // // Sync nav
   // $(".owl-13").on('click', '.owl-next', function () {
   //    $(".owl-12").trigger('next.owl.carousel') ;
   // });
   // $(".owl-13").on('click', '.owl-prev', function () {
   //    $(".owl-12").trigger('prev.owl.carousel');
   // });

});