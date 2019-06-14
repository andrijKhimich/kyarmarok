$(document).ready(function () {


  // toggle filters
  $('.filter__item>span').click(function(){
    $(this).siblings('.filter__list-sub').slideToggle();
  });
  // END DOCUMENT READY
})

$('.filter__list-sub').hide();


// checkind window sizes
$(window).resize(function () {

});


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
  // appendDots: 'main-slider__pagination',
  pauseOnDotsHover: true,
  cssEase: 'linear',
  arrows: true,
  prevArrow: $('.js-prev'),
  nextArrow: $('.js-next'),
  // customPaging: function(slider, i) {
  //   // this example would render "tabs" with titles
  //   return '<li class="pager"></li>';
  // },
  // customPaging: function(slider, i) { 
  //   return '<li class="pager">' + $(slider.$slides[i]).attr('title') + '</li>';
// },

  
});
// Load SVG-sprite for all browsers
svg4everybody({});