export default class acordion {
  constructor(list){
    this.acordionItem = document.querySelectorAll(list);
    this.activeClass = 'ativo'
  }

  toggleAcordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAcordionEvent(){
    this.acordionItem.forEach((item) => {
      item.addEventListener("click", () => this.toggleAcordion(item));
    });

  }

  init(){
    if (this.acordionItem.length) {
      this.toggleAcordion(this.acordionItem[0]);
      this.addAcordionEvent();
    }
  }

}
