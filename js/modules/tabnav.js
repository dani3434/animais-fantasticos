export default class TabAnimais {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo';
  }

  // Ativa a tab de acordo com o index na nodeList
  activeTab(index) {
    this.tabContent.forEach((content) => {
      content.classList.remove(this.activeClass);
    });
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass, direcao);
  }

  // Adiciona Os Eventos as tabs
  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener('click', () => {
        this.activeTab(index);
      });
    });
  }

  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeira tab
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
