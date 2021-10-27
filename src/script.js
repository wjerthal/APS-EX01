alert("Funciona!!!");

let x = 10;

let condicao = x > 0;

if (condicao) {
  alert("X é maior do que zero");
} else {
  console.log("X é menor ou igual a que zero");
}

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
