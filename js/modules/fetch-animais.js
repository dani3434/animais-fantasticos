import InitAnimaNumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  async function fetchAnimais(url) {
    try {
      const animaisresponse = await fetch(url);
      const animaisJson = await animaisresponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      InitAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  fetchAnimais('./animais-api.json');
}
