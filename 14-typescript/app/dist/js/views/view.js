export class View {
    elemento;
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
