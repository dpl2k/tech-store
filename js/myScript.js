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

   $(".days").html(days+"Days ");
   $(".hours").html(hours+":");
   $(".minutes").html(minutes+":");
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
      autoplay: true,
      autoPlaySpeed: 3000,
      autoPlayTimeout: 3000,
      autoplayHoverPause: true,
      rewind: true,
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
      autoplay: true,
      autoPlaySpeed: 3000,
      autoPlayTimeout: 3000,
      autoplayHoverPause: true,
      rewind: true,
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

   $("#sync1").owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: false, 
      items:1
   });

   $("#sync2").owlCarousel({
      loop: true,
      margin: 10,
      dots: false,
      nav: true,
      addClassActive: true,
      items: 2,
      afterMove: function () {
         //reset transform for all item
         $(".owl-item").css({
            transform: "none"
         })
         //add transform for 2nd active slide
         $(".owl-item.active").eq(1).css({
            border: "1px solid #000",

         })

      },
      //set init transform
      afterInit: function () {
         $(".owl-item.active").eq(1).css({
            border: "1px solid #000",
         })
      }
   });
   // $("#sync2").trigger("to.owl.carousel", [2, 1])

   // Sync nav
   $("#sync2").on('click', '.owl-next', function () {
      $("#sync1").trigger('next.owl.carousel')
   });
   $("#sync2").on('click', '.owl-prev', function () {
      $("#sync1").trigger('prev.owl.carousel')
   });

});