const imagem1 = document.querySelector('#img1');
const imagem2 = document.querySelector('#img2');
const imagem3 = document.querySelector('#img3');
const imagem4 = document.querySelector('#img4');

var div1 = document.getElementById("divResultado1");
var div2 = document.getElementById("divResultado2");
var div3 = document.getElementById("divResultado3");
var div4 = document.getElementById("divResultado4");

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem1 = () => {
    let valorAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${valorAleatorio}`,{        
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        div1.innerText = imagem1.alt;    
    });        
} 

pegarPersonagem2 = () => {
    let valorAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${valorAleatorio}`,{        
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        div2.innerText = imagem2.alt;      
    });        
}

pegarPersonagem3 = () => {
    let valorAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${valorAleatorio}`,{        
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        div3.innerText = imagem3.alt;     
    });        
}

pegarPersonagem4 = () => {
    let valorAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${valorAleatorio}`,{        
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem4.src = data.image;
        imagem4.alt = data.name;
        div4.innerText = imagem4.alt;    
    });        
}

iniciar = () => {
    pegarPersonagem1();
    pegarPersonagem2();
    pegarPersonagem3();
    pegarPersonagem4();     
}