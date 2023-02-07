// ligar a lampada
const turnOn = document.getElementById('turnOn');
// desligar a lampada
const turnOff = document.getElementById('turnOff');
// selecionando a lampada
const lampada = document.getElementById('lampada');

// trocando a imagem quando o botão é clicado
function lampOn() {
    if( !lampadaBroken ()){
        lamp.src = './imagens-lampadas/ligada.jpg';
    }
}
function lampOff(){
    if( !lampadaBroken ()){
        lamp.src = "./imagens-lampadas/desligada.jpg"
    }
}

// Quebrando a lampada
function lampQuebrada() {
    lamp.src = "./imagens-lampadas/quebrada.jpg"
}
//verifica se a lampada está quebrada
function lampadaBroken () {
    return lamp.src.indexOf('quebrada') > -1;

}

// executando as ações
function acoesLampada(){
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener('mouseleave',lampOff);
lamp.addEventListener('dblclick', lampQuebrada);
}

acoesLampada();

