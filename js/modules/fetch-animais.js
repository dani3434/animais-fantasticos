import animaNumeros from "./anima-numeros.js";

export default function fetchAnimais() {

  function createAnimais(animal) {
    const div = document.createElement("div");
    div.classList.add(".numero-animal");

    div.innerHTML = `<div class="numero-animal"><h3>${animal.especie}</h3><span data-numero>${animal.total}</span></div>`;
    return div;
  }

  async function initFetchAnimais(url) {
    try {
      const animaisResponse = await fetch(url);
      const animaisJson = await animaisResponse.json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisJson.forEach((animal) => {
        const divAnimal = createAnimais(animal);
        numerosGrid.appendChild(divAnimal);
      });

      animaNumeros();
      
    } catch (erro) {
      console.log(erro);
    }
  }

  initFetchAnimais("./animais-api.json");
}
