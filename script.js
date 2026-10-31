const itens = document.querySelectorAll('.faq-item');
const form = document.querySelector('.formulario');

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const desafio = document.getElementById('desafio');

// FAQ
itens.forEach((item) => {
    item.addEventListener('toggle', () => {
        if (item.open) {
            itens.forEach((outro) => {
                if (outro !== item) {
                    outro.open = false;
                }
            });
        }
    });
});

// Formulário
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    console.log('enviou');
});