
"use strict";

// PRE loader
$(window).load(function(){
  $('.preloader').fadeOut(1000); // set duration in brackets    
});

// Parallax Js
function initParallax() {
  $('#home').parallax("100%", 0.3);
  $('#about').parallax("20%", 0.3);
  $('#work').parallax("40%", 0.3);
  $('#contact').parallax("60%", 0.3);
  $('#footer').parallax("80%", 0.3);
}
initParallax(); 

// WOW Animation js
new WOW({ mobile: false }).init();

function submitMessage() {

  const name = $('#inputName');
  const email = $('#inputEmail');
  const message = $('#inputMessage');

  console.log({name, email, message});

  console.log(document.messageForm);

  // action="/api/wedding-message"
  return false;
}