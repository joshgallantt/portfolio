$(document).ready(function(){
  $(".nav-toggle").click(function(){
    $('.hamburger').toggleClass("is-active");
    $('.nav').toggleClass("nav-open");
    $('body').toggleClass("disable-scroll");
    $('html').toggleClass("disable-scroll");
  });

  $(".nav_link a").click(function(){
    $('.hamburger').toggleClass("is-active");
    $('.nav').removeClass("nav-open");
    $('body').toggleClass("disable-scroll");
    $('html').toggleClass("disable-scroll");
  });
});