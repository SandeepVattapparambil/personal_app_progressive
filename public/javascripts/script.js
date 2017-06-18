/*
Sandeep Vattapparambil
*/
//Vanilla javascript
function detectmob() {
  if (navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}
var device = detectmob();
if (!device) {
  console.log('Desktop detected');
  NProgress.start();
} else {
  console.log('Mobile detected');
}

//jquery
$(document).ready(function() {
  detectmob();
  NProgress.done();
  // on load finished
  $(window).load(function() {
    // select element and fade it out
    $('.overlay').fadeOut();
  });
  $(".button-collapse").sideNav();
});
