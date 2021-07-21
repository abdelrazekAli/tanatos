$(function () {
  'use strict';

  //Adjust Slider Height
  //scroll to skills
  $('.header .content .icon2').click(function(){
    $('html, body').animate({
      scrollTop: $('.skills').offset().top
    },1000);
  });
  $('.header .hire-us').click(function(){
    $('html, body').animate({
      scrollTop: $('.say-hello').offset().top
    },1000);
  });
  $('.header .our-works').click(function(){
    $('html, body').animate({
      scrollTop: $('#works').offset().top
    },1000);
  });
});
//show button
let hiddenDiv = document.getElementById("hiddenDiv"),
    btn = document.getElementById("btn");
btn.onclick = function(){
  if(btn.textContent == "show more"){
    btn.innerText = "show less";
    hiddenDiv.classList.toggle("hidden");
  }
  else{
    btn.innerText = "show more";
    hiddenDiv.classList.toggle("hidden");
  }
}
