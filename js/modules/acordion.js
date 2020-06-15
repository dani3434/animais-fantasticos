export default function acordion() {
  const acordionItem = document.querySelectorAll('[data-anime="acordion"] dt');
  const ativo = "ativo";

  function activeAcordion() {
    this.classList.toggle(ativo);
    this.nextElementSibling.classList.toggle(ativo);
  }

  if (acordionItem.length) {
    acordionItem[0].classList.add(ativo);
    acordionItem[0].nextElementSibling.classList.add(ativo);

    acordionItem.forEach((item) => {
      item.addEventListener("click", activeAcordion);
    });
  }
}
