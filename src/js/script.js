$(document).ready(function () {


  // toggle filters
  $('.filter__item>span').click(function(){
    $(this).siblings('.filter__list-sub').slideToggle();
  });

  $('.goods-card__marks-box').click(function(){
    $(this).toggleClass('goods-card__marks-box_active');
  });

  $('.pagination__link').click(function(e){
    e.preventDefault();
    $(this).toggleClass('pagination__link_active');
  });

  $('.sidebar__button_mob').click(function(e){
    e.preventDefault();
    $('.js-sidebar_left').toggleClass('sidebar_left_active');
    $('.sidebar__overlay').toggleClass('sidebar__overlay_active');
  });
  $('.sidebar__overlay').click(function(){
    console.log('dsf');
    $('.js-sidebar_left').removeClass('sidebar_left_active');
    $('.sidebar__overlay').removeClass('sidebar__overlay_active');
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