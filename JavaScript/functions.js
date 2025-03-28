//Scroll Suave: Para que la navegación entre secciones sea fluida.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Efectos de Fade In al hacer scroll
const elements = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

elements.forEach(el => observer.observe(el));


//Menú desplegable o hamburguesa
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});

//Modo oscuro
document.querySelector('#dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
