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


// Hero POV
let carousel = document.querySelector('.citrusStylesSE-carousel');

let carouselInner = document.querySelector('.citrusStylesSE-carousel__inner ');

let prev = document.querySelector('.citrusStylesSE-carousel-controls .prev');

let next = document.querySelector('.citrusStylesSE-carousel-controls .next');

let slides =  document.querySelectorAll('.citrusStylesSE-carousel__inner  .citrusStylesSE-carousel__inner--item ');

let totalSlides = slides.length;

let step = 100 / totalSlides;

let activeSlide = 0;

let activeIndicator = 0;

let direction = -1;

let jump = 1;

let interval = 5000;

let time;



//Init carousel
carouselInner.style.minWidth = (totalSlides * 100) + '%';
loadIndicators();
loop(true);


//Carousel events

next.addEventListener('click',()=>{
    slideToNext();
});

prev.addEventListener('click',()=>{
    slideToPrev();
});

carouselInner.addEventListener('transitionend',()=>{
    if(direction === -1){
        if(jump > 1){
            for(let i = 0; i < jump; i++){
                activeSlide++;
                carouselInner.append(carouselInner.firstElementChild);
            }
        }else{
            activeSlide++;
            carouselInner.append(carouselInner.firstElementChild);
        }
    }else if(direction === 1){
        if(jump > 1){
            for(let i = 0; i < jump; i++){
                activeSlide--;
                carouselInner.prepend(carouselInner.lastElementChild);
            }
        }else{
            activeSlide--;
            carouselInner.prepend(carouselInner.lastElementChild);
        }
    };

    carouselInner.style.transition = 'none';
    carouselInner.style.transform = 'translateX(0%)';
    setTimeout(()=>{
        jump = 1;
        carouselInner.style.transition = 'all ease .5s';
    });
    updateIndicators();
});

document.querySelectorAll('.citrusStylesSE-carousel-indicators span').forEach(item=>{
    item.addEventListener('click',(e)=>{
        let slideTo = parseInt(e.target.dataset.slideTo);
        
        let indicators = document.querySelectorAll('.citrusStylesSE-carousel-indicators span');

        indicators.forEach((item,index)=>{
            if(item.classList.contains('active')){
                activeIndicator = index
            }
        })

        if(slideTo - activeIndicator > 1){
            jump = slideTo - activeIndicator;
            step = jump * step;
            slideToNext();
        }else if(slideTo - activeIndicator === 1){
            slideToNext();
        }else if(slideTo - activeIndicator < 0){

            if(Math.abs(slideTo - activeIndicator) > 1){
                jump = Math.abs(slideTo - activeIndicator);
                step = jump * step;
                slideToPrev();
            }
                slideToPrev();
        }
        step = 100 / totalSlides; 
    })
});

carousel.addEventListener('mouseover',()=>{
    loop(false);
})

carousel.addEventListener('mouseout',()=>{
    loop(true);
})

//Carousel functions

function loadIndicators(){
    slides.forEach((slide,index)=>{
        if(index === 0){
            document.querySelector('.citrusStylesSE-carousel-indicators').innerHTML +=
            `<span data-slide-to="${index}" class="active"></span>`;
        }else{
            document.querySelector('.citrusStylesSE-carousel-indicators').innerHTML +=
            `<span data-slide-to="${index}"></span>`;
        }
    }); 
};

function updateIndicators(){
    if(activeSlide > (totalSlides - 1)){
        activeSlide = 0;
    }else if(activeSlide < 0){
        activeSlide = (totalSlides - 1);
    }
    document.querySelector('.citrusStylesSE-carousel-indicators span.active').classList.remove('active');
    document.querySelectorAll('.citrusStylesSE-carousel-indicators span')[activeSlide].classList.add('active');
};

function slideToNext(){
    if(direction === 1){
        direction = -1;
        carouselInner.prepend(carouselInner.lastElementChild);
    };
    
    carousel.style.justifyContent = 'flex-start';
    carouselInner.style.transform = `translateX(-${step}%)`;
};

function slideToPrev(){
    if(direction === -1){
        direction = 1;
        carouselInner.append(carouselInner.firstElementChild);
    };
    carousel.style.justifyContent = 'flex-end'
    carouselInner.style.transform = `translateX(${step}%)`;
};

function loop(status){
    if(status === true){
        time = setInterval(()=>{
            slideToNext();
        },interval);
    }else{
        clearInterval(time);
    }
}