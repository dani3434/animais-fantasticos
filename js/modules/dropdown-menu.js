import outsideClick from './outside-click.js';

export default class DropDownMenu {
  constructor(dropDownMenus) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  addDropDownMenusEvent() {
    this.dropDownMenus.forEach((menu) => {
      ['touchstart', 'click'].forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropDownMenusEvent();
    }
    return this;
  }
}
