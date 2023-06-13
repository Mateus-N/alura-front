import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', event => {
    event.preventDefault();
    controller.adiciona();
});
const botaoImporta = document.querySelector('#botao-importa');
botaoImporta === null || botaoImporta === void 0 ? void 0 : botaoImporta.addEventListener('click', () => {
    controller.importaDados();
});
