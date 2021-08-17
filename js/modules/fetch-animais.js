import AnimaNumeros from './anima-numeros.js';

export default function FetchAnimais(url, target) {
  const numerosGrid = document.querySelector(target);
  // Cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }

  // Puxa os animais atraves de um arquivo json
  async function fetchAnimais() {
    try {
      const animaisresponse = await fetch(url);
      const animaisJson = await animaisresponse.json();

      animaisJson.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });

      const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
      animaNumeros.init();
    } catch (erro) {
      console.log(erro);
    }
  }

  return fetchAnimais();
}
