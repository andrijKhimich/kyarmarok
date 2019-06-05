$(document).ready(function () {
  textHeight();
  testimonialHeight();
  checkWindowWith()

  // open / close desktop dropdown list
  $('.js-drop').click(function () {
    toggleDropdown();
  });

  // open / close humburger menu
  $('.js-humburger').click(function () {
    toggleMenu();
  });

  $(window).scroll(function () {
    numbersInit();
  });

  $('.js-show').click(function (e) {
    e.preventDefault();
    toggleBrowse()
  });
  
  // END DOCUMENT READY
})


// checkind window sizes
$(window).resize(function () {
  textHeight();
  testimonialHeight();
  checkWindowWith()
});

// open/close browse dropdown list
function checkWindowWith() {
  if (window.innerWidth < 992) {
    $('.nav-browse').hide();
  } else {
    $('.nav-browse').slideDown();
  }
}

// open/close browse dropdown list
function toggleBrowse(){
  $('.nav-browse').slideToggle();
}


// var k = jQuery.noConflict();
// function equalHeight(group) {
//   var tallest = 0;
//   group.each(function() {
//     thisHeight = k(this).height();
//     if(thisHeight > tallest) {
//       tallest = thisHeight;
//     }
//   });
//   group.height(tallest);
// }        
// k(document).ready(function(){
//   equalHeight(k(".testimonials__content"));
// }); 



// project functions
// init odometer numbers
function numbersInit() {
  $('.odometer').each(function () {
    var counter = $(this);
    var num = counter.attr('data-num');
    counter.html(num);
    if (counter.offset().top - $(window).scrollTop() < $(window).height() / 1.2) {
      $('.statistics-box').css('opacity', 1);
      counter.html(num);
    } else {
      return false
    }
  });
}
// parters lsider
$('.partners-slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 5000,
  centerPadding: 0,
  speed: 800,
  lazyLoad: 'progressive',
  responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

// partners color slider
$('.partners-color__slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  centerPadding: 0,
  speed: 800,
  lazyLoad: 'progressive',
  responsive: [{
      breakpoint: 1025,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1

      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

//testimonials slider 
$('.testimonials-slider').slick({
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 5000,
  centerPadding: 0,
  speed: 800,
  responsive: [{
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

// init select2 
// $('.city-search').select2({
//   placeholder: "Select your city...",
//   allowClear: false
// });

// check height offer boxes
function textHeight() {
  var maxContent = 0;
  $('.js-offer-box').each(function () {
    if ($(this).height() > maxContent) {
      maxContent = $(this).height();
    }
  });
  $('.js-offer-box').height(maxContent);
}
//check height testimonials boxes
function testimonialHeight() {
  var maxContent = 0;
  $('.testimonials__content').each(function () {
    if ($(this).height() > maxContent) {
      maxContent = $(this).height();
    }
  });
  $('.testimonials__content').height(maxContent);
}
// open / close desktop dropdown list
function toggleDropdown() {
  $('.nav-sub').toggleClass('nav-sub_active');
}
// click on body with open desktop dropdown list
$(document).mouseup(function (e) {
  var searchcontainer = $('.js-drop');

  if (!searchcontainer.is(e.target) && searchcontainer.has(e.target).length === 0) {
    $('.nav-sub').removeClass('nav-sub_active');
  }
});

// open / close humburger menu
function toggleMenu() {
  $('.js-humburger').toggleClass('humburger_open');
  $('.header-nav').toggleClass('header-nav_active');
  $('body').toggleClass('body_fixed');
}

// Load SVG-sprite for all browsers
svg4everybody({});