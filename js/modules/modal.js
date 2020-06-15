export default function initModal(){
    const botaoAbrir = document.querySelector('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    const containerModal = document.querySelector('[data-modal="container"]');
   
    function modal(event){
      event.preventDefault();
      containerModal.classList.toggle('ativo');
    }

    function foraModal(event){
      if(event.target === this)
      modal(event);
    }

    if(botaoAbrir && botaoFechar && containerModal){

        botaoAbrir.addEventListener('click',modal);
        botaoFechar.addEventListener('click',modal);
        containerModal.addEventListener('click',foraModal);

    }
}

