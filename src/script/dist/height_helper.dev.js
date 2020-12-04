"use strict";

if (window.innerHeight < 800) {
  document.querySelector('body').style.height = '820px';
} else {
  document.querySelector('body').style.height = window.innerHeight + "px";
}

window.addEventListener('resize', function () {
  if (window.innerHeight < 800) {
    document.querySelector('body').style.height = '820px';
  } else {
    document.querySelector('body').style.height = window.innerHeight + "px";
  }
});