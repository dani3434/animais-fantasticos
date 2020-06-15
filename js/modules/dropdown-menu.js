import outsideClick from './outsideclick.js';

export default function dropdown(){
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach((menu) =>{
    
    function handClick(event){
      event.preventDefault();
      this.classList.toggle('active');
      outsideClick(this,['click','touchstart'],() =>{ 
        this.classList.remove('active');
      });
    }
    
    ['touchstart','click'].forEach(userEvent =>{
      menu.addEventListener(userEvent,handClick);
      
    });

  });

}


