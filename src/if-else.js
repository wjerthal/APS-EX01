
let x = 10;
let condicao = x > 0;

if (condicao) {  
  console.log("X é maior do que zero");
} else {
  console.log("X é menor ou igual a que zero");
}

let estaSol = true;
if (estaSol) {
  console.log("Vou pra praia!");
} else {
  console.log("Vou ficar em casa!");
}

let numero = 1;
if (numero > 0) {
  console.log("Número positivo");
} else if (numero == 0) {
  console.log("Número é zero");
} else {
  console.log("Número negativo");
}

let numero2 = 3;
let paridade = numero2 % 2 == 0 ? "par" : "ímpar";
console.log(paridade);

let hoje = new Date().getDay(); 
let dia;
switch (hoje) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Segunda";
    break;
  case 2:
     dia = "Terça";
    break;
  case 3:
    dia = "Quarta";
    break;
  case 4:
    dia = "Quinta";
    break;
  case 5:
    dia = "Sexta";
    break;
  case 6:
    dia = "Sábado";
}
console.log(dia);

let sinal = "vermelho";
switch(sinal) {
   case "verde":
      console.log("Sinal "+sinal+" - pode passar!");
      break;
   case "amarelo":
      console.log("Sinal "+sinal+" - prestes a fechar, cuidado...");
      break;
   case "vermelho":
      console.log("Sinal "+sinal+" - fechado, não passe!");
      break;
   default:
      console.log("Sinal "+sinal+" - sinal inválido");
}

let sinal2 = "azul";
switch(sinal2){
    case "verde" : 
        console.log("pode passar");
        break;
    case 'amarelo' :
        console.log("prestes a fechar, cuidado...");
        break;
    case "vermelho":
        console.log("fechado, não passe");
        break;
    default:
        console.log("esse não é um valor válido para sinal");
        break;
}

let count = 0; 
while(count < 10){
    console.log(count);
    count++;
}

let count2 = 0; 
do{
    console.log(count2);
    count2++;
}
while(count2 < 10);

let vetor = [1,2,3,'a','b','c',true,false];
let primeiro_elemento = vetor[0];
let quinto_elemento = vetor[4];
let oitavo_elemento = vetor[7];
console.log(primeiro_elemento);
console.log(quinto_elemento);
console.log(oitavo_elemento);

let vetor2 = [101,102,103,104,105,106,107,108,109,110];
for(let i = 0; i < vetor2.length; i++){
    console.log(vetor2[i]);
}

const vetor3 = [10,20,30,40,50];
for(let indice in vetor3){
    console.log(indice, vetor3[indice]);
}

const matriz = [
  [11,21,31],
  [41,51,61],
  [71,81,91]
];

for(let linha of matriz){
  for (let dado of linha){
      console.log(dado);
  }
}

let vetor4 = [10,20,30,40,50];
let novo_elemento = 60;
/*Para adicionar um elemento ao final do vetor, faça:*/
vetor4.push(novo_elemento);
/*Para remover do final:*/
for(let indice in vetor4){
  console.log(indice, vetor4[indice]);
}vetor4.pop();
/*Para adicionar ao começo:*/
vetor4.unshift(novo_elemento);
for(let indice in vetor4){
  console.log(indice, vetor4[indice]);
}/*Para remover do começo:*/
vetor4.shift();
for(let indice in vetor4){
  console.log(indice, vetor4[indice]);
}






