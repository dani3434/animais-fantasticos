
export default class TabMenu{
  
  constructor(menu,content){
    this.tabMenu2 = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = 'ativo'
  }

  activeTab(index){
    this.tabContent.forEach((item) =>{
      item.classList.remove(this.activeClass);
    })
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activeClass,direcao);
  }

  addTabEvent(){

    this.tabMenu2.forEach((imgMenu,index) =>{
      imgMenu.addEventListener('click',() =>{
        this.activeTab(index);
      });
    })
  }

  init(){
    if(this.tabMenu2.length && this.tabContent){
      this.activeTab(0)
      this.addTabEvent();
    }
    return this;
  }
}





