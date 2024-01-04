@charset "UTF-8";/* 
CitrusStylesSE  v1.0 (https://getbootstrap.com/)
Copyright 2024 the SEBPO Authors (https://sebpo.com/)
Licensed under SEBPO (https://sebpo.com/) */

// Configuration
var allowMultiplePanels = true; // Set to true to allow both panels open

// Function to toggle the accordion panel
function toggleAccordionPanel(accordion, accordionPanel) {
    accordion.classList.toggle("citrusStylesSE__accordion--active");
    accordionPanel.style.maxHeight = accordionPanel.style.maxHeight ? null : accordionPanel.scrollHeight + "px";
}

// Function to close all panels except the clicked one
function closeOtherPanels(accordionList, clickedAccordion) {
    if (!allowMultiplePanels) {
        for (var i = 0; i < accordionList.length; i++) {
            var otherAccordion = accordionList[i];
            if (otherAccordion !== clickedAccordion) {
                var otherPanel = otherAccordion.nextElementSibling;
                otherPanel.style.maxHeight = null;
                otherAccordion.classList.remove("citrusStylesSE__accordion--active");
            }
        }
    }
}

// Event listener for each accordion button
function accordionClickHandler() {
    var accordionPanel = this.nextElementSibling;

    closeOtherPanels(citrusStylesSEaccordion, this);
    toggleAccordionPanel(this, accordionPanel);
}

// Attach event listeners to accordion buttons
var citrusStylesSEaccordion = document.getElementsByClassName("citrusStylesSE__accordion");

for (var i = 0; i < citrusStylesSEaccordion.length; i++) {
    citrusStylesSEaccordion[i].addEventListener("click", accordionClickHandler);
}