document.addEventListener("DOMContentLoaded", start)

function start(){

    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const links = document.querySelectorAll('.menu a');
    const navbarHeight = document.querySelector('nav').offsetHeight;

    function toggleMenu() {
        menu.classList.toggle('open');
        document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';

        menuToggle.querySelector(".line1__bars-menu").classList.toggle("activeline1__bars-menu");
        menuToggle.querySelector(".line2__bars-menu").classList.toggle("activeline2__bars-menu");
        menuToggle.querySelector(".line3__bars-menu").classList.toggle("activeline3__bars-menu");
    }

    menuToggle.addEventListener("click", toggleMenu);

    function scrollToTarget(targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    function closeMenu() {
        if (menu.classList.contains('open')) {
            toggleMenu();
        }
    }

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetId === '#home') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                scrollToTarget(targetElement);
            }
            closeMenu(); 
        });
    });
    window.scrollTo({
        top: 0,
        behavior: 'auto'
    });
    
    function titleAnimation(){
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
    }
    titleAnimation()

}

