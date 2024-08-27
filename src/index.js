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

    function handleScroll() {

        const arrowBox = document.querySelector('.box-arrows');
        const aboutMeSection = document.getElementById('about-me');
    
        const aboutMeRect = aboutMeSection.getBoundingClientRect();

        if (aboutMeRect.top >= 0 && aboutMeRect.top <= window.innerHeight) {
            arrowBox.style.display = 'none';
        } else {
            arrowBox.style.display = 'block';
        }
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    document.querySelectorAll('.div-read-more').forEach(button => 
        button.addEventListener('click', readMore)
    );
        
    function readMore(e) {
        e.preventDefault();
    
        const button = e.target.closest('.div-read-more');
        const projectClass = button.querySelector('img').classList[2];
        
        const moreInfoClass = `more-info-${projectClass}`;
        const moreInfoClass1 = `more-info-${projectClass}1`;
        const textElement = button.querySelector(`.${projectClass}-p`);
        const moreInfoElement = document.querySelector(`.${moreInfoClass1}`);
    
        moreInfoElement.classList.toggle(moreInfoClass);

        if(moreInfoElement === document.querySelector('.more-info-all1')){
            if(moreInfoElement.classList.contains(moreInfoClass)){
                textElement.textContent = 'View all projects';
                return
            } else{
                textElement.textContent = 'View less projects';
                return
            }
        } else if(moreInfoElement.classList.contains(moreInfoClass)) {
            textElement.textContent = 'Read More';
        } else {
            textElement.textContent = 'Read Less';
        }
        
    }
    const inputs= document.querySelectorAll('.field-input')
    inputs.forEach(input => {
        if (input.value !== "") {
            input.classList.add('not-empty');
        }
    });
    inputs.forEach(input => {
        input.addEventListener('blur', inputBlur)
    });
        
    function inputBlur(e){
        console.log(e.target)
        if (e.target.value.trim() !== "") {
            e.target.classList.add('not-empty');
        } else {
            e.target.classList.remove('not-empty');
        }
    
        if (e.target.value.trim() !== "") {
            e.target.classList.add('not-empty');
        }
    }

    function modal(){
        // Obtener todos los botones que abren las modales
        const openModalButtons = document.querySelectorAll('.openModal');
        // Obtener todos los botones de cierre de las modales
        const closeButtons = document.querySelectorAll('.close');
        console.log(closeButtons);
        // Obtener todos los contenedores de las modales
        const modals = document.querySelectorAll('.modal');
        const body = document.body; // Obtener el body

        // Agregar eventos de clic a los botones de abrir modal
        openModalButtons.forEach(button => {
            button.addEventListener('click', function() {
                const modalId = this.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                modal.style.display = "block";
                body.classList.add("modal-open"); // Evitar el desplazamiento del body
            });
        });

        // Agregar eventos de clic a los botones de cerrar modal
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                console.log('funciona la X')
                const modalId = this.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                modal.style.display = "none";
                body.classList.remove("modal-open"); // Permitir el desplazamiento del body
            });
        });

        // Cerrar la modal si se hace clic fuera del contenido
        window.onclick = function(event) {
            modals.forEach(modal => {
                if (event.target == modal) {
                    modal.style.display = "none";
                    body.classList.remove("modal-open"); // Permitir el desplazamiento del body
                }
            });
        }
    }
    modal();


}

