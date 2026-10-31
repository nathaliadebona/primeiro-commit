const itens = document.querySelectorAll('.faq-item');

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