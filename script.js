const itens = document.querySelectorAll('.faq-item');
const form = document.querySelector('.formulario');

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const desafio = document.getElementById('desafio');

// Erro formulário
function mostrarErro(campo, mensagem) {
    campo.classList.add('invalido');
    campo.classList.remove('valido');

    const erro = campo.nextElementSibling;
    erro.textContent = mensagem;
    erro.hidden = false;
}

function mostrarValido(campo) {
    campo.classList.add('valido');
    campo.classList.remove('invalido');

    const erro = campo.nextElementSibling;
    erro.textContent = '';
    erro.hidden = true;
}

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

    mostrarErro(nome, 'Teste de erro');
});