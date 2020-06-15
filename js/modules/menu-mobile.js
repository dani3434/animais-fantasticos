import outsideClick from './outsideclick.js';

export default function menuMobile() {
  const menuMobile2 = document.querySelector('[data-menu="button-mobile"]');
  const listaMenu = document.querySelector('#menu');
  const eventos = ['click','touchstart'];
  
  function openMenu(){
    listaMenu.classList.toggle('active');
    menuMobile2.classList.toggle('active');

    outsideClick(listaMenu,eventos, () =>{
      listaMenu.classList.remove('active');
      menuMobile2.classList.remove('active');
    });
  }

  if(menuMobile2){

      eventos.forEach(() =>{
        menuMobile2.addEventListener(eventos,openMenu);
      })
      
  }
}

