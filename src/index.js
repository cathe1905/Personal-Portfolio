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

    const button = document.querySelector('.view-all');
    button.addEventListener('click', viewAllProjects)
        
    function viewAllProjects(e) {
        e.preventDefault();

        const textElement= document.querySelector('.all-p');
        const allProjects= document.querySelector('.all-projects');
        allProjects.classList.toggle('more-info-all');
       
            if(allProjects.classList.contains('more-info-all')){
                textElement.textContent = 'View all projects';
                return
            } else{
                textElement.textContent = 'View less projects';
                return
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

        // Obtener todos los contenedores de las modales
        const modals = document.querySelectorAll('.modal');
        const body = document.body; // Obtener el body

        // Agregar eventos de clic a los botones de abrir modal
        openModalButtons.forEach(button => {
            button.addEventListener('click', function() {
                const modalId = this.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                modal.classList.add('modalOpen');
                body.classList.add("modal-open"); // Evitar el desplazamiento del body
            });
        });

        // Agregar eventos de clic a los botones de cerrar modal
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
       
                const modalId = this.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                modal.classList.remove('modalOpen');
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

    function sendEmail(){
        const btn = document.getElementById('button');
        const name=document.querySelector('#from_name');
        const email= document.querySelector('#email');
        const message= document.querySelector('#message')

        document.getElementById('form')
        .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_s1crxcl';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                btn.value = 'Send Email';
                alert('Sent!');
                this.reset()
                }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
                });

        });
    }

    sendEmail();

}

