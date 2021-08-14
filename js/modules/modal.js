export default class initModal {
  constructor(abrirModal, containerModal, fecharModal) {
    this.modalAbrir = document.querySelector(abrirModal);
    this.modalContainer = document.querySelector(containerModal);
    this.modalFechar = document.querySelector(fecharModal);

    // bind this ao callback para fazer referencia ao objeto da classe
    this.toogleModal = this.toogleModal.bind(this);
    this.fecharContainer = this.fecharContainer.bind(this);
  }

  toogleModal(event) {
    event.preventDefault();
    this.modalContainer.classList.toggle('ativo');
  }

  // Fecha o modal clicar no lado de fora
  fecharContainer(event) {
    if (event.target === this.modalContainer) {
      this.modalContainer.classList.remove('ativo');
    }
  }

  // Adiciona os eventos ao clique
  addEvents() {
    this.modalContainer.addEventListener('click', this.fecharContainer);
    this.modalAbrir.addEventListener('click', this.toogleModal);
    this.modalFechar.addEventListener('click', this.toogleModal);
  }

  init() {
    if (this.modalAbrir && this.modalContainer && this.modalFechar) {
      this.addEvents();
    }
    return this;
  }
}
