//Open NAvigation SideBar
$('.nav-toggle').click(function (e) {

  e.preventDefault();
  $("html").toggleClass("openNav");
  $(".nav-toggle").toggleClass("active");

});


// SMOOTH SCROLLING TO LINK AREA
$(document).ready(function () {
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function () {
        window.location.hash = hash;
      });
    }
  });
});



//Typed Js in About Area
var typed = new Typed('#typed', {
  strings: [
    'Web Designer.',
    'Freelance Designer.',
    'UX/UI Designer.'
  ],
  typeSpeed: 50,
  backSpeed: 75,
  loop: true
});



//PIe Chart
$(window).scroll(function () {

  /* Check the location of each desired element */
  $('#languages').each(function (i) {

    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    /* If the object is completely visible in the window, fade it in */
    if (bottom_of_window > bottom_of_object) {

      $('.pie-chart').easyPieChart({
        size: 160,
        lineWidth: 30,
        lineCap: "round",
        barColor: "#FF6B6B",
        trackColor: "#0d151e",
        scaleColor: !1,
        animate: 1500,
      });

    }

  });

});










// Project Catagory Area
$(document).ready(function () {
  'use strict';

  //************ Magnific Popup
  $('.zoom1').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function (element) {
        return element.find('img');
      }
    }
  });

  //*************** Isotope filter
  var $Container = $('#img-filter');
  if ($Container.length > 0) {
    $Container.isotope({
      itemSelector: '.single-port',
      transitionDuration: '0.8s'
    });
    $(".img-filter").on("click", function (e) {
      $(".img-filter.active").removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr('data-filter');
      $Container.isotope({
        filter: selector
      });
      return false;
    });

    $(window).resize(function () {
      setTimeout(function () {
        $Container.isotope();
      }, 1000);
    }).trigger('resize');
  }

});





// Contact Maps Popup
$(document).ready(function () {
  $('.popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
});




/*===== OPTIONAL REFRESH PAGE AT THE TOP OF DOCUMENT LOAD INSTEAD OF AT # (HASH) =====
$(document).ready(function () {
  $("html,body").animate({
    scrollTop: 0
  }, 500);
});*/




