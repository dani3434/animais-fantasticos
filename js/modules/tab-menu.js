
export default function tabMenu(){

  const tabMenu2 = document.querySelectorAll('[data-tab="menu"] li');

  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  function activeTab(index){
    tabContent.forEach((item) =>{
      item.classList.remove('ativo');
    })
    const direcao = tabContent[index].dataset.anime;
    tabContent[index].classList.add('ativo',direcao);
  }

  if(tabMenu2.length && tabContent){

    tabContent[0].classList.add('ativo');

    tabMenu2.forEach((imgMenu,index) =>{
      imgMenu.addEventListener('click',() =>{
        activeTab(index);
      });
    })
  }

}





