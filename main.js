function tocarSom (seletorTagAudio){
    const elemento = document.querySelector(seletorTagAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido!');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//ESTRUTURA DE REPETIÇÃO WHILE:
// let contador = 0;

// while (contador < listaDeTeclas.length){

//     const tecla = listaDeTeclas[contador];
//     const instrumento = tecla.classList[1];
//     let idAudio = `#som_${instrumento}`;

//     tecla.onclick = function(){
//         tocarSom(idAudio);
//     }

//     contador += 1;
// }

//ESTRUTURA DE REPETIÇÃO FOR:
for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    let idAudio = `#som_${instrumento}`;

    tecla.onclick = function (){
        tocarSom(idAudio);
    }

    tecla.onkeydown = function(evento){

        if (evento.code === "Enter" || evento.code === "Space"){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}
