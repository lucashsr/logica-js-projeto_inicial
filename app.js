alert('Boas vindas ao jogo do número secreto');

let numeroMax = 5000

let numeroSecreto = parseInt(Math.random()*numeroMax + 1);
console.log(numeroSecreto); 

let chute = prompt(`Escolhe um numero entre 1 e ${numeroMax}`);
let tentativa = 1;

while (chute != numeroSecreto){
    
    if(numeroSecreto > chute){
        alert(`numero secreto é maior que o ${chute}`);
        chute = prompt('Escolhe um numero entre 1 e 30');
    } else {
        alert(`numero secreto é menor que o ${chute}`);
        chute = prompt('Escolhe um numero entre 1 e 30');
    }
    tentativa++
}


let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`PARABÉNS! você acertou o numero secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}`);



