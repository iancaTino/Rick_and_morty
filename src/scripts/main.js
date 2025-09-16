document.addEventListener('DOMContentLoaded', function () {
    // pega todos os botões das abas
    const buttons = document.querySelectorAll('[data-tab-button]');
    // pega todas as perguntas do FAQ
    const questions = document.querySelectorAll('[data-faq-question]');

    // clique nas abas
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

    // clique nas perguntas do FAQ
    questions.forEach(question => {
        question.addEventListener('click', abreOuFechaResposta);
    });

    // Função para esconder todas as abas
    function escondeTodasAbas() {
        const abas = document.querySelectorAll('[data-tab-id]');
        abas.forEach(aba => aba.classList.remove('personagens__list--is-active'));
    }

    // Função para remover o estado ativo de todos os botões
    function removeBotaoAtivo() {
        buttons.forEach(button => button.classList.remove('personagens__tabs__button--is-active'));
    }

    // Função para abrir/fechar resposta do FAQ
    function abreOuFechaResposta(evento) {
        const classe = 'faq__questions__item--is-open';
        const elementoPai = evento.target.parentNode;
        elementoPai.classList.toggle(classe);
    }
});
