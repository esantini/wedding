
"use strict";

const IS_PROD = window.location.href.startsWith('https://wedding.esantini.com');

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
  $('#home').parallax("0%", 0.3);
  $('#nosotros').parallax("20%", 0.3);
  $('#direcciones').parallax("40%", 0.3);
  $('#contact').parallax("60%", 0.3);
  $('#footer').parallax("80%", 0.3);
}
initParallax();

// WOW Animation js
new WOW({ mobile: false }).init();

function setSending() {
  $('#contact').addClass('sending');
  submit.disabled = true;
  inputName.disabled = true;
  inputEmail.disabled = true;
  inputMessage.disabled = true;
}
function cancelSending() {
  $('#contact').removeClass('sending');
  submit.disabled = false;
  inputName.disabled = false;
  inputEmail.disabled = false;
  inputMessage.disabled = false;
}
function setSent() {
  $('#contact').removeClass('sending');
  $('#contact').addClass('sent');
}
function setSendingError(err) {
  $('#messageFormError').addClass('show');
  $('#messageFormError .errorMessage').html(err);
}

function submitMessage() {
  setSending();
  const name = inputName.value;
  const email = inputEmail.value;
  const message = inputMessage.value;

  fetch(`${IS_PROD ? '' : 'http://localhost:3003'}/api/wedding-message`,
    {
      method: 'POST',
      mode: IS_PROD ? 'cors' : 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    }
  )
    .then(setSent)
    .catch(error => {
      cancelSending();
      setSendingError(error);
      console.error(error);
    });

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
