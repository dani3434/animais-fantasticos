import outsideClick from './outside-click.js';

export default class initMenuMobile {
  constructor(menuButton, menuList) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.eventos = ['touchstart', 'click'];

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.toggle('ativo');
    this.menuButton.classList.toggle('ativo');

    outsideClick(this.menuList, this.eventos, () => {
      this.menuList.classList.remove('ativo');
      this.menuButton.classList.remove('ativo');
    });
  }

  addEventMenuMobile() {
    this.eventos.forEach((userEvent) => {
      this.menuButton.addEventListener(userEvent, this.openMenu);
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addEventMenuMobile();
    }
    return this;
  }
}
