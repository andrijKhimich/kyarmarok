$(document).ready(function () {
  // checking height for charchteristiks and tabs == one height on desktop
  textHeight();


  if (window.innerWidth < 991) {
    mobileOnlySlider();
    $('.js-catalog').click(function(){
      $('.js-catalog').toggleClass('active');
      $('.header-social').toggleClass('hidden');
      $('.header-marks').toggleClass('hidden');
    });
  }

  // if (window.innerWidth < 1199) {
  //   toggleMobNavigation();
  // } else {
  //   // $('.header-navigation').css('overflow', 'hidden');
  // }


  // toggle filters (dropdown)
  $('.filter__item>span').click(function () {
    $(this).siblings('.filter__list-sub').slideToggle();
  });

  // add yellow backgraound for checking marks
  $('.goods-card__marks-box').click(function () {
    $(this).toggleClass('goods-card__marks-box_active');
  });

  // add active state for pagination
  $('.pagination__link').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('pagination__link_active');
  });

  // open sidebar whith filters on catalog page
  $('.sidebar__button_mob').click(function (e) {
    e.preventDefault();
    $('.js-sidebar_left').toggleClass('sidebar_left_active');
    $('.sidebar__overlay').toggleClass('sidebar__overlay_active');
    $('.header-navigation').removeClass('active');
    $('.js-humburger').removeClass('active');
    $('.header-social').removeClass('active');
    $('.header-marks').removeClass('active');
  });

  // close sidebar whoth filters on catalog page(click on red owerlay)
  $('.sidebar__overlay').click(function () {
    $('.js-sidebar_left').removeClass('sidebar_left_active');
    $('.sidebar__overlay').removeClass('sidebar__overlay_active');
    // $('body').removeClass('noscroll');
    $('body').removeClass('no-scroll');
  });


  // open sidebar whith filters on catalog page
  $('.sidebar__button_mob').click(function (e) {
    e.preventDefault();
    $('.js-sidebar_right').toggleClass('sidebar_right_acive');
    $('.wrapper__overlay').toggleClass('wrapper__overlay_active');
    $('body').toggleClass('no-scroll');
    $('.header-navigation').removeClass('active');
    $('.js-humburger').removeClass('active');
    $('.header-social').removeClass('active');
    $('.header-marks').removeClass('active');
  });

  // close sidebar whoth filters on catalog page(click on red owerlay)
  $('.wrapper__overlay').click(function () {
    $('.js-sidebar_right').removeClass('sidebar_right_acive');
    $('.wrapper__overlay').removeClass('wrapper__overlay_active');
    
  });

  // product tabs description
  $('.product-tabs__list').on('click', '.product-tabs__item:not(.product-tabs__item_active)', function () {
    $(this)
      .addClass('product-tabs__item_active').siblings().removeClass('product-tabs__item_active')
      .closest('div.product-tabs').find('div.product-tabs__content').hide().eq($(this).index()).fadeIn(400);
  });

  // set id for product small slider
  $('.product-slider_sm-content .slick-slide').click(function () {
    var slideId = $(this).attr('data-slick-index');
    moveSlidersTo(slideId);
  });

  // slider product small navigation 'prev'
  $('.js-sm-prev').click(function (e) {
    e.preventDefault();
    var curentSlideId = $('.product-slider_sm-content .slick-current').attr('data-slick-index');
    moveSlidersTo(parseInt(curentSlideId) - 1);
  });

  // slider product small navigation 'next'
  $('.js-sm-next').click(function (e) {
    e.preventDefault();
    var curentSlideId = $('.product-slider_sm-content .slick-current').attr('data-slick-index');
    moveSlidersTo(parseInt(curentSlideId) + 1);
  });

  function moveSlidersTo(idSlide) {
    $('.product-slider_sm-content').slick('slickGoTo', idSlide);
    $('.product-slider__img').slick('slickGoTo', idSlide);
  }


  // show/hide table on basket page
  $('.details').click(function (e) {
    e.preventDefault();
    $($(this).attr('href')).slideToggle();
  });


  $('.js-humburger').click(function () {
    toggleMobNavigation();
    $('.wrapper__overlay').removeClass('wrapper__overlay_active');
    $('.sidebar_right').removeClass('.sidebar_right_acive');
  });

  // modal 
  $('.js-order').click(function (e) {
    e.preventDefault();
    $('.overlay').addClass('overlay_active');
    $('.modal').addClass('modal_active');
    $('body').addClass('no-scroll');
  });
  $('.js-close-modal').click(function (e) {
    e.preventDefault();
    $('.overlay').removeClass('overlay_active');
    $('.modal').removeClass('modal_active');
    $('.modal-form').removeClass('modal_active');
    $('body').removeClass('no-scroll');
  });

  $('.contact-btn').click(function (e) {
    e.preventDefault();
    $('.overlay').addClass('overlay_active');
    $('.modal-form').addClass('modal_active');
    $('body').addClass('no-scroll');
  });
  $('.js-close-modal').click(function (e) {
    e.preventDefault();
    $('.overlay').removeClass('overlay_active');
    $('.modal').removeClass('modal_active');
    $('.modal-form').removeClass('modal_active');
    $('body').removeClass('no-scroll');
  });
  $('.overlay').click(function(){
    $('.overlay').removeClass('overlay_active');
    $('.modal').removeClass('modal_active');
    $('.modal-form').removeClass('modal_active');
    $('body').removeClass('no-scroll');
  });

  $('.js-catalog').click(function () {
    $('.catalog__list').slideToggle();
  });

  // END DOCUMENT READY
  // checkind window sizes
  $(window).resize(function () {
    // checking height for charchteristiks and tabs == auto height on mobile
    textHeight();

    $(window).resize(function (e) {
      if (window.innerWidth < 991) {
        if (!$('.user-gallery-box-slider').hasClass('slick-initialized')) {
          mobileOnlySlider();
        }

      } else {
        if ($('.user-gallery-box-slider').hasClass('slick-initialized')) {
          $('.user-gallery-box-slider').slick('unslick');
        }
      }
    });
  });

})
$('.catalog__list').hide();

function mobileOnlySlider() {
  $('.user-gallery-box-slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: $('.js-user-prev'),
    nextArrow: $('.js-user-next'),
    responsive: [{
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}



// checking height for charchteristiks and tabs one fumction on two screen resolution
function textHeight() {
  var maxContent = 0;
  $('.js-height').each(function () {
    if ($(this).height() > maxContent) {
      maxContent = $(this).height();
      $('.js-height').height(maxContent);
    } else if ($(window).width() <= 1199) {
      $('.js-height').css('height', 'auto');
    }
  });
}


// hide filter for dropdown
$('.filter__list-sub').hide();


// hide tabs in catalog page
$('.basket-cart__table').hide();





// click on body with open desktop dropdown list
$(document).mouseup(function (e) {
  var searchcontainer = $('.catalog__list, .js-catalog');

  if (!searchcontainer.is(e.target) && searchcontainer.has(e.target).length === 0) {
    $('.catalog__list').slideUp();
    $('.js-catalog').removeClass('active');
    $('.header-social').removeClass('hidden');
    $('.header-marks').removeClass('hidden');
  }
});


// innit main slider on main page
$('.js-slider').slick({
  dots: true,
  dotsClass: 'main-slider__pagination',
  infinite: true,
  speed: 500,
  fade: true,
  appendDots: 'main-slider__pagination',
  pauseOnDotsHover: true,
  cssEase: 'linear',
  arrows: true,
  prevArrow: $('.js-prev'),
  nextArrow: $('.js-next'),
});
// innit lg slider product page
$('.js-sl-product-img').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  adaptiveHeight: true,
  prevArrow: $('.js-sm-prev'),
  nextArrow: $('.js-sm-next'),
});
// innit small slider product page
$('.js-sl-sm-img').slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  fade: false,
  cssEase: 'linear',
  adaptiveHeight: true,
  prevArrow: $('.js-sm-prev'),
  nextArrow: $('.js-sm-next'),
  responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
// init photo reviews slider
$('.js-sl-photo-reviews').slick({
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: false,
  cssEase: 'linear',
  adaptiveHeight: true,
  arrows: true,
  prevArrow: $('.js-photo-prev'),
  nextArrow: $('.js-photo-next'),
});

function toggleMobNavigation(){
  $('.humburger').toggleClass('active');
  $('.header-navigation').toggleClass('active');
  $('.header-social').toggleClass('active');
  $('.header-marks').toggleClass('active');
  $('body').toggleClass('no-scroll');

  $('.navigation ul li a').click(function(){
    $('.humburger').removeClass('active');
    $('.header-navigation').removeClass('active');
    $('.header-social').removeClass('active');
    $('.header-marks').removeClass('active');
    $('body').removeClass('no-scroll');
  });

  $('.js-catalog').click(function(){
    $('.header-navigation').css('overflow-y', 'scroll');
  });
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("headerStick");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// Load SVG-sprite for all browsers
svg4everybody({});