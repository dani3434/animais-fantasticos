export default class animaNumeros {
  constructor(numeros, observeTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget);
    this.observerClass = observerClass;

    this.mutacao = this.mutacao.bind(this)
  }

  static incrementarNumeros(numero){
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;

    const timer = setInterval(() => {
      start += incremento;
      numero.innerText = start;
      // console.log(start);
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 30 * Math.random());
  }

  animaNumeros2() {
    this.numeros.forEach((numero) => {
      this.constructor.incrementarNumeros(numero);
    });
  }

  mutacao(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observador.disconnect();
      this.animaNumeros2();
    }
  }

  addMutationObserve() {
    this.observador = new MutationObserver(this.mutacao);
    this.observador.observe(this.observetarget, { attributes: true });
  }

  init() {
    this.addMutationObserve();

    return this;
  }
}
