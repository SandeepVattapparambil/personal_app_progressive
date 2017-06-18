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
    console.log('Mobile detected');
    return true;
  } else {
    console.log('Desktop detected');
    return false;
  }
}
NProgress.start();
//jquery
$(document).ready(function() {
  detectmob();
  NProgress.done();
  $(".button-collapse").sideNav();
});
