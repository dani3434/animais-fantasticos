import outsideClick from './outside-click.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['touchstart', 'click'];

  function openMenu() {
    menuList.classList.toggle('ativo');
    menuButton.classList.toggle('ativo');

    outsideClick(menuList, eventos, () => {
      menuList.classList.remove('ativo');
      menuButton.classList.remove('ativo');
    });
  }

  if (menuButton) {
    eventos.forEach((userEvent) => {
      menuButton.addEventListener(userEvent, openMenu);
    });
  }
}
