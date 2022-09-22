// Add slideDown animation to Bootstrap dropdown when expanding.
$('.dropdown').on('show.bs.dropdown', function () {
   $(this).find('.dropdown-menu').slideDown();
});

// Add slideUp animation to Bootstrap dropdown when collapsing.
$('.dropdown').on('hide.bs.dropdown', function () {
   $(this).find('.dropdown-menu').slideUp();
});

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
            items: 3,
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
            items: 2,
         },
         600: {
            items: 2,
         },
         1000: {
            items: 2,
         },
      },
   });

});

// $(document).ready(function () {
//    $(".owl-three").owlCarousel({
//       loop: false,
//       margin: 10,
//       dots: false,
//       nav: true,
//       responsiveClass: true,
//       responsive: {
//          0: {
//             items: 2,
//          },
//          600: {
//             items: 3,
//          },
//          1000: {
//             items: 4,
//          },
//       },
//    });
// });

// $(document).ready(function () {
//    $(".owl-four").owlCarousel({
//       loop: false,
//       margin: 10,
//       dots: false,
//       nav: false,
//       responsiveClass: true,
//       responsive: {
//          0: {
//             items: 1,
//          },
//          600: {
//             items: 2,
//          },
//          1000: {
//             items: 3,
//          },
//       },
//    });
// });