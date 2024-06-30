
document.querySelector(".menu-toggle").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    document.querySelector('.menu').classList.toggle('open');

    // Manejo del scroll
    if (document.querySelector('.menu').classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
};
const dynamicText= document.querySelector("h1 span");
const words= ["Catherin Romero", "Backend Developer", "Frontend Developer", "innovative", "self-taught" ]

let worIndex= 0;
let charIndex= 0;
let isDeleting= false;

const typeEffect = () => {
    const currentWord= words[worIndex];
    const currentChar= currentWord.substring(0, charIndex);
    dynamicText.textContent= currentChar;
    dynamicText.classList.add("stop-blinking");

    if(!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 75);
    } else if (isDeleting && charIndex > 0 ){
        charIndex--;
        setTimeout(typeEffect, 40);
    } else {
        isDeleting= !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        worIndex= !isDeleting ? (worIndex + 1) % words.length : worIndex;
        setTimeout(typeEffect, 1200);
    }
}
typeEffect();