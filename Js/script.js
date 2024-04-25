/* ============= menu icon nav ========== */
let menuIcon = document.querySelector('#menu-icon');
let navItems = document.querySelector('.nav-items');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navItems.classList.toggle('active');
}


/* ========== remove menu icons when click ========== */
window.onscroll = () => {

    menuIcon.classList.remove('bx-x');
    navItems.classList.remove('active');
}

/*============== dark light mode ============= */
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
}

/* ========= Scroll page to top =========== */
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add('active');
    } else {
        toTop.classList.remove('active');
    }
})

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .certificate-heading, .social-media', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, contact-form', { origin: 'bottom' }); 
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content, .skills-content, .project-container,.certificate-item img', { origin: 'right' });


/* =============== jQuery ================== */
var typed = new Typed(".typing", {
    strings: ["a Junior Web Developer.", "a Freelancer.", "a Cyber Security Enthusiast.", "an aspiring DevOps Engineer."],
    typeSpeed: 100,
    BackSpeed: 50,
    loop: true
});