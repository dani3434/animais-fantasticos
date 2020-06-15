
export default function funcionamento(){
  
    const funcionamentoSemana = document.querySelector('[data-semana]');

    const diasSemana = funcionamentoSemana.dataset.semana.split(',').map(Number);
    const horarioSemana = funcionamentoSemana.dataset.horario.split(',').map(Number);





    const dataAgora = new Date();

    const diaAgora = dataAgora.getDay()
    const horarioAgora = dataAgora.getHours();


    const abertoSemana = diasSemana.indexOf(diaAgora) !== -1;

    const abertoHoras = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

    if(abertoSemana && abertoHoras){
      funcionamentoSemana.classList.add('aberto');
    }else{
      funcionamentoSemana.classList.add('fechado');
    }

}

