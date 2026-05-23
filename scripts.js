// Menu mobile
const botaoMenu = document.getElementById('botao-menu');
const menu = document.getElementById('menu');

if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', () => {
        menu.classList.toggle('aberto');
    });

    document.querySelectorAll('.menu a').forEach((itemMenu) => {
        itemMenu.addEventListener('click', () => {
            menu.classList.remove('aberto');
        });
    });
}

// Ano no rodape
const anoRodape = document.getElementById('ano');
if (anoRodape) {
    anoRodape.textContent = `© ${new Date().getFullYear()} Igreja ICF. Todos os direitos reservados.`;
}

// Scroll do indicador
const seta = document.querySelector('.seta');
const primeiroCartao = document.querySelector('.cartao');

if (seta && primeiroCartao) {
    seta.addEventListener('click', () => {
        primeiroCartao.scrollIntoView({ behavior: 'smooth' });
    });
}

// Animacao dos cartoes ao aparecerem na tela
const opcoesObservador = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observador = new IntersectionObserver((itens) => {
    itens.forEach((item) => {
        if (item.isIntersecting) {
            item.target.style.opacity = '1';
            item.target.style.transform = 'translateY(0)';
        }
    });
}, opcoesObservador);

document.querySelectorAll('.cartao').forEach((cartao) => {
    observador.observe(cartao);
});

document.querySelectorAll('.item-valor').forEach((valor) => {
    valor.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });

    valor.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});
