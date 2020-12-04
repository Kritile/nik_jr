"use strict";

document.querySelector('body').style.height = window.innerHeight + "px";
window.addEventListener('resize', function () {
  document.querySelector('body').style.height = window.innerHeight + "px";
});