// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    document.querySelectorAll('.menu a').forEach((link) => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
        });
    });
}

// Ano no rodape
const yearElement = document.getElementById('year');
if (yearElement) {
    yearElement.textContent = `© ${new Date().getFullYear()} Igreja ICF. Todos os direitos reservados.`;
}

// Scroll do indicador
const scrollIndicator = document.querySelector('.scroll-indicator');
const firstCard = document.querySelector('.card');

if (scrollIndicator && firstCard) {
    scrollIndicator.addEventListener('click', () => {
        firstCard.scrollIntoView({ behavior: 'smooth' });
    });
}

// Animacao dos cards ao aparecerem na tela
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach((card) => {
    observer.observe(card);
});

document.querySelectorAll('.value-item').forEach((item) => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });

    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});
