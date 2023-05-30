export abstract class View<T> {
  protected elemento: HTMLElement;

  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor) as HTMLElement;
  }

  protected abstract template(model: T): string;

  public update(model: T): void {
    let template = this.template(model);
    template = template.replace(/<script[\s\S]*?<\/script>/, '');
    this.elemento.innerHTML = template;
  }
}