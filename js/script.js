let palavras = ["programador", "algoritmo", "javascript", "html", "css", "web","frontend","backend","fullstack","desenvolvimento","aplicativo","jogo","site","software"];
let palavra = palavras[Math.floor(Math.random() * palavras.length)];

let chances = 6;
let acertos = 0;

let posicao = 0;
for(posicao = 0; posicao < palavra.length; posicao++){
    let span = document.createElement("span");
    span.setAttribute('id',posicao);

    let div = document.getElementById("palavra");
    div.appendChild(span);
}

let alfabeto = "abcdefghijklmnopqrstuvxyz";
let letras = alfabeto.split("");

for(posicao = 0; posicao < letras.length; posicao++){
    let botao = document.createElement("button");
    let letra = document.createTextNode(letras[posicao]);

    botao.appendChild(letra);
    botao.setAttribute('onclick','escolheLetra(\''+letras[posicao]+'\)');
    botao.setAttribute('id', letras[posicao]);

    let div = document.getElementById("letras");
    div.appendChild(botao);
}

function escolheLetra(letra){
    let acertou = false;
    for(posicao = 0; posicao < palavra.length; posicao++){
        if (letra === palavra[posicao]){
            let span = document.getElementById(posicao);
            let l = document.createTextNode(letra);
        
            span.appendChild(l);

            let botao = document.getElementById(letra);
            botao.setAttribute('class','certa');
            botao.removeAttribute('onclick');

            acertou++;
            acertou = true;
        }
    }

    if(acertou === false){
        imagem++;
        document.getElementById("forca").src="images/forca-"+imagem+".jpg";
        var botao = document.getElementById(letra);
        botao.setAttribute('class','errada');
        botao.removeAttribute('onclick');

        chances--;
    }

    if (chances === 0) {
        let mensagem = document.createElement("p");
        let t1 = document.createTextNode("Você perdeu!");
        mensagem.appendChild(t1);

        let botao = document.createElement("button");
        let t2 = document.createTextNode("jogar novamente");
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'novo-bt');
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(mensagem);
        div.appendChild(botao);
    }

    if (acertos === palavra.length) {
        let mensagem = document.createElement("p");
        let t1 = document.createTextNode("Você venceu!");
        mensagem.appendChild(t1);

        let botao = document.createElement("button");
        let t2 = document.createTextNode("jogar novamente");
        
        botao.appendChild(t2);
        botao.setAttribute('class', 'novo-bt');
        botao.setAttribute('onclick', 'window.location.reload()');

        let div = document.getElementById("novo");
        div.appendChild(mensagem);
        div.appendChild(botao);
    }
}