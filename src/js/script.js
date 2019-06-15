$(document).ready(function () {
  textHeight();

  // toggle filters
  $('.filter__item>span').click(function () {
    $(this).siblings('.filter__list-sub').slideToggle();
  });

  $('.goods-card__marks-box').click(function () {
    $(this).toggleClass('goods-card__marks-box_active');
  });

  $('.pagination__link').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('pagination__link_active');
  });

  $('.sidebar__button_mob').click(function (e) {
    e.preventDefault();
    $('.js-sidebar_left').toggleClass('sidebar_left_active');
    $('.sidebar__overlay').toggleClass('sidebar__overlay_active');
  });



  $('.sidebar__overlay').click(function () {
    $('.js-sidebar_left').removeClass('sidebar_left_active');
    $('.sidebar__overlay').removeClass('sidebar__overlay_active');
  });

  $('.product-tabs__list').on('click', '.product-tabs__item:not(.product-tabs__item_active)', function () {
    $(this)
      .addClass('product-tabs__item_active').siblings().removeClass('product-tabs__item_active')
      .closest('div.product-tabs').find('div.product-tabs__content').hide().eq($(this).index()).fadeIn(400);
  });



  $('.product-slider_sm-content .slick-slide').click(function () {
    var slideId = $(this).attr('data-slick-index');
    moveSlidersTo(slideId);
  });



  // slider how works navigation 'prew'
  $('.js-sm-prev').click(function (e) {
    e.preventDefault();
    var curentSlideId = $('.product-slider_sm-content .slick-current').attr('data-slick-index');
    moveSlidersTo(parseInt(curentSlideId) - 1);
  });

  // slider how works navigation 'next'
  $('.js-sm-next').click(function (e) {
    e.preventDefault();
    var curentSlideId = $('.product-slider_sm-content .slick-current').attr('data-slick-index');
    moveSlidersTo(parseInt(curentSlideId) + 1);
  });

  function moveSlidersTo(idSlide) {
    $('.product-slider_sm-content').slick('slickGoTo', idSlide);
    $('.product-slider__img').slick('slickGoTo', idSlide);
  }

  $('.details').click(function(e){
    e.preventDefault();
    // console.log('sdfsf');
    $($(this).attr('href')).slideToggle();
    // $(this).parent('div.basket-cart__table').find('table').slideDown();
  });

  // END DOCUMENT READY
})

// checkind window sizes
$(window).resize(function () {
  textHeight();
});

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

$('.filter__list-sub').hide();

$('.basket-cart__table').hide();





// click on body with open desktop dropdown list
// $(document).mouseup(function (e) {
//   var searchcontainer = $('.js-drop');

//   if (!searchcontainer.is(e.target) && searchcontainer.has(e.target).length === 0) {
//     $('.nav-sub').removeClass('nav-sub_active');
//   }
// });

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



$('.product-slider__img').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  adaptiveHeight: true,
  // arrows: true,
  prevArrow: $('.js-sm-prev'),
  nextArrow: $('.js-sm-next'),
});

$('.product-slider_sm-content').slick({
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  speed: 500,
  fade: false,
  cssEase: 'linear',
  adaptiveHeight: true,
  // arrows: true,
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

$('.photo-reviews-slider').slick({
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

// Load SVG-sprite for all browsers
svg4everybody({});