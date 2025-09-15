document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            escondeTodasAbas();
            aba.classList.add('personagens__list--is-active');

            removeBotaoAtivo();
            event.target.classList.add('personagens__tabs__button--is-active');
        });
    });
});

// Função para esconder todas as abas
function escondeTodasAbas() {
    const abas = document.querySelectorAll('[data-tab-id]');
    abas.forEach(aba => aba.classList.remove('personagens__list--is-active'));
}

// Função para remover o estado ativo de todos os botões
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    buttons.forEach(button => button.classList.remove('personagens__tabs__button--is-active'));
}
