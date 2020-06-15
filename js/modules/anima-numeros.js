export default function animaNumeros() {
  function animaNumeros2() {
    const numeros = document.querySelectorAll("[data-numero]");

    numeros.forEach((numero) => {
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
    });
  }

  let observador;
  
  function mutacao(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      animaNumeros2();
      observador.disconnect();
    }
  }

  const observetarget = document.querySelector(".numeros");
  observador = new MutationObserver(mutacao);

  observador.observe(observetarget, { attributes: true });
}
