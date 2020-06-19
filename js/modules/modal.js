export default class initModal{
    
  constructor(botaoAbrir,botaoFechar,containerModal){
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ao callback
    this.modal = this.modal.bind(this);
    this.foraModal = this.foraModal.bind(this);

  }
   
  toggleModal(){
    this.containerModal.classList.toggle('ativo');
  }

  modal(event){
    event.preventDefault();
    this.toggleModal()
  }

  foraModal(event){
    if(event.target === this.containerModal)
    this.modal(event);
  }

  addModalEvents(){
    this.botaoAbrir.addEventListener('click',this.modal);
    this.botaoFechar.addEventListener('click',this.modal);
    this.containerModal.addEventListener('click',this.foraModal);
  }

  init(){
    if(this.botaoAbrir && this.botaoFechar && this.containerModal){
      this.addModalEvents()
    }
    return this;
  }
}

