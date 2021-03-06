/*
        About          
=========================
/*
 Template Name: Eduka - Educational Website Template
 Template URI: https://mdsumonmia.me/template/eduka
 Author URI: https://mdsumonmia.me/
*/

jQuery(document).ready(function($){
  
/*
      Table Index       
========================
:: 1. Preloader
:: 2. OnePageNav
:: 3. Responsive Menu
:: 4. Sticky Menu
:: 5. Back to Top
*/

  "use strict";
  
/*=====| 1. Preloader |=====*/

var loader = function() {
  setTimeout(function() { 
    if($('#ftco-loader').length > 0) {
      $('#ftco-loader').removeClass('show');
    }
  }, 1);
};
loader();

/*=====| 2. OnePageNav |=====*/
$('.menu').onePageNav({
  currentClass: 'active',
  changeHash: false,
  scrollSpeed: 750,
  scrollThreshold: 0.5,
  filter: '',
  easing: 'swing'
});
  
/*=====| 3. Responsive Menu |=====*/
$('.nav-button').on("click", function(e) {
  e.preventDefault();
  e.stopPropagation();
  if (!$(this).hasClass('open')) {
      $(this).addClass('open');
      $('.mobile-menu').addClass('expand');
  } else {
      $(this).removeClass('open');
      $('.mobile-menu').removeClass('expand');
  }
  return false;
});

$('.menu-close').on("click", function() {
  $('.mobile-menu').removeClass('expand');
  $('.nav-button').removeClass('open');
});

$('.mobile-menu a').on("click", function() {
  $('.mobile-menu').removeClass('expand');
  $('.nav-button').removeClass('open');
});

});

/*=====| 4. Sticky Menu |=====*/
  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 600) {
      $('.stickynav').addClass('sticky');
      
    }
    else {
      $('.stickynav').removeClass('sticky');
    }
});


/*=====| 5. Back to Top |=====*/
var btn = $('.scroll-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 600) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});
