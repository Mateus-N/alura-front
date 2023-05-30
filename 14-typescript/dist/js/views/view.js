export class View {
    elemento;
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        let template = this.template(model);
        template = template.replace(/<script[\s\S]*?<\/script>/, '');
        this.elemento.innerHTML = template;
    }
}
