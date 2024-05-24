let element = document.querySelector('h2');
element.textContent = 'ALTEREI A ATIVIDADE';

// let ebutoon = document.querySelector('button');
// ebutoon.textContent = 'SALVADO'

function troca() {
    // Essa função diz que ao clicar no botão: 

    //Ele vai mudar o titulo para "ALTEREI A ATIVIDADE"
    let element = document.querySelector('h1');
    element.textContent = "ALTEREI A ATIVIDADE";

    //Ele vai mudar a cor do titulo para azul
    let title = document.querySelector('h1');
    title.style.color = 'blue';
    
    //Ele vai mudar a cor de fundo da pagina 
    let body = document.body;
    body.style.backgroundColor = 'orange'
}
 
function mudaTema() {
    //Essa função 
    const titulo1 = document.querySelector('h1');
    const titulo2 = document.querySelector('h2');
    const body = document.body;

    if(body.style.backgroundColor == "white"){
        titulo1.style.color = "white";
        titulo2.style.color = "white";
        body.style.backgroundColor = 'black'
    } else {
        titulo1.style.color = "black";
        titulo2.style.color = "black";
        body.style.backgroundColor = 'white'
    } 

}


function texto() {
    // Essa função, ao clicar no botão ela vai pegar o nome da caixa de texto e jogar no titulo 
    //abaixo selecionei o titulo
    let titulo = document.querySelector('h1');
    //abaixo sellecionei a caixa de texto
    let element = document.querySelector('#caixa').value;
    //abaixo coloquei que o titulo vai mudar seu texto para o conteudo da caixa
    titulo.textContent = element;
}

