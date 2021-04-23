// Adicione a classe ativo a todos os itens do menu
const menuItens = document.querySelectorAll('.menu a')

menuItens.forEach((itens) =>{
  itens.classList.add('ativo');
})
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItens.forEach((itens,index) =>{
  itens.classList.remove('ativo');
  if(!itens.classList.contains('ativo') && index === 0){
    itens.classList.add('ativo');
  }
})
// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img');

img.forEach((item) =>{
  console.log(item.hasAttribute('alt'))
})
// Modifique o href do link externo no menu
const linkExterno = document.querySelector('a[href^="https"]');
const linkModificado = linkExterno.setAttribute('href','testando');
