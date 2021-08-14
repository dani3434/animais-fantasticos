export default class Acordion {
  constructor(list) {
    this.acordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  activeAcordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  // Adiciona os eventos a cada acordion
  addAcordionEvent() {
    this.acordionList.forEach((item) => {
      item.addEventListener('click', () => { this.activeAcordion(item); });
    });
  }

  // Inicia a função
  init() {
    if (this.acordionList.length) {
      this.activeAcordion(this.acordionList[0]);
      this.addAcordionEvent();
    }
    return this;
  }
}
