
"use strict";

// PRE loader
$(window).load(function () {
  $('.preloader').fadeOut(1000); // set duration in brackets 
  $('.nosotros-thumb .img-responsive').on('click', showImage);
  $('.nosotros-thumb').on('click', hideImage);
  $(document).keyup(function (e) {
    if (e.key === "Escape") {
      hideImage();
    }
  });
});

// Parallax Js
function initParallax() {
  $('#home').parallax("100%", 0.3);
  $('#nosotros').parallax("20%", 0.3);
  $('#direcciones').parallax("40%", 0.3);
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

  console.log({ name, email, message });

  console.log(document.messageForm);

  // action="/api/wedding-message"
  return false;
}

function showImage(e) {
  e.stopPropagation();
  hideImage().addClass(e.target.id);
}
function hideImage(e) {
  e?.stopPropagation();
  return $(`#image-display`).removeClass('a b c d');
}
