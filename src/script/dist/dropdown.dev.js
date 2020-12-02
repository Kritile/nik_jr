"use strict";

document.querySelector('.dropdown-toggle').addEventListener('click', function () {
  if (document.querySelector('.dropdown-menu').style.display == 'none') {
    document.querySelector('.dropdown-menu').style.display = 'block';
  } else {
    document.querySelector('.dropdown-menu').style.display = 'none';
  }
});