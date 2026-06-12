function mostrarSurpresa(){


let mensagem =
"Você é uma das melhores coisas que já aconteceram comigo ❤️";


document.getElementById("surpresa").innerHTML = mensagem;


}



function abrirCarta(){


let carta =
document.getElementById("carta");


if(carta.style.display=="block"){

carta.style.display="none";

}

else{

carta.style.display="block";

}


}




// CONTADOR


let inicio = new Date("2025-02-21");


function atualizarContador(){


let agora = new Date();


let diferenca = agora - inicio;



let dias = Math.floor(
diferenca / (1000*60*60*24)
);



document.getElementById("contador").innerHTML =
dias + " dias ❤️";


}



setInterval(atualizarContador,1000);

atualizarContador();




// CORAÇÕES


function criarCoracao(){


let coracao =
document.createElement("div");


coracao.className="coracao";


coracao.innerHTML="❤️";


coracao.style.left =
Math.random()*100+"vw";


coracao.style.animationDuration =
(3+Math.random()*3)+"s";



document.body.appendChild(coracao);



setTimeout(()=>{

coracao.remove();

},6000);


}


setInterval(criarCoracao,300);

function abrirSegredo(){


let area =
document.getElementById("areaSenha");


if(area.style.display=="block"){

area.style.display="none";

}

else{

area.style.display="block";

}


}



function verificarSenha(){


let senhaDigitada =
document.getElementById("senha").value;



let senhaCorreta =
"0403";


if(senhaDigitada == senhaCorreta){


document.getElementById("telaFinal").style.display="flex";


}


else{


document.getElementById("mensagemSecreta").innerHTML =
"Senha errada 😢 tenta de novo";


}


}