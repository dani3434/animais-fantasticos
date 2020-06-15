
export default function animacaoScroll(){

  const sections = document.querySelectorAll('[data-anime="scroll"]');


  if(sections.length){
      const windowMetade = window.innerHeight * 0.6;
      
      function animaScroll(){
        sections.forEach((section) =>{
          const topSect = section.getBoundingClientRect().top - windowMetade;
          if(topSect < 0){
            section.classList.add('ativo');
          }else if(section.classList.contains('ativo')){
            section.classList.remove('ativo');
          }
        })
      }

      animaScroll();

      window.addEventListener('scroll',animaScroll);

  }
}

