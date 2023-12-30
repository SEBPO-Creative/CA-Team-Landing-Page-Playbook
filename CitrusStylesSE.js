@charset "UTF-8";/* 
CitrusStylesSE  v1.0 (https://getbootstrap.com/)
Copyright 2024 the SEBPO Authors (https://sebpo.com/)
Licensed under SEBPO (https://sebpo.com/) */

var citrusStylesSEaccordion = document.getElementsByClassName("citrusStylesSE__accordion");
var citrusStylesSE__i;

for (citrusStylesSE__i = 0; citrusStylesSE__i < acc.length; citrusStylesSE__i++) {
    citrusStylesSEaccordion[citrusStylesSE__i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("citrusStylesSE__accordion--active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}