
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

