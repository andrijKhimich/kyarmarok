$(document).ready(function () {

  
  // END DOCUMENT READY
})




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


$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
// Load SVG-sprite for all browsers
svg4everybody({});