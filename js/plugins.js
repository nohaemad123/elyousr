/*global $, alert, document, eq */

$(function () {
    'use strict';
    
            $("html").niceScroll();
    $('.carousel').carousel({
     interval: 900   
    });
	
	$('.about').click(function () {
        $('html,body').animate({
            scrollTop: $('#about').offset().top
        },3000);
    });
	
	$('.services').click(function () {
        $('html,body').animate({
            scrollTop: $('#services').offset().top
        },3000);
    });
	
	$('.contact').click(function () {
        $('html,body').animate({
            scrollTop: $('#contact').offset().top
        },3000);
    });
});




