// Definindo uma função
function escreva() {
  console.log("Olá!");
}
escreva();

// Definindo uma função com parâmetros
function escreva2(texto) {
  console.log(texto);
}
escreva2("meu primeiro parâmetro");
escreva2("meu segundo parâmetro");
escreva2("Olá como parâmetro!");

// Definindo a função
function geradorNumerico() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}
// Chamando a função
geradorNumerico();

// Definindo a função
function geradorNumerico2(comeco, fim) {
  for (let i = comeco; i <= fim; i++) {
    console.log(i);
  }
}
// Chamando a função
geradorNumerico2(10, 20);

//
function somar(a, b) {
  return a + b;
}
let resultado = somar(1, 3);
console.log(resultado);

function soma(a, b) {
  return a + b;
}
const resultado2 = soma(2, 3);
console.log(resultado2);

// Usando function
function soma1(a, b) {
  return a + b;
}
// Atribuindo uma função anônima em constantes
const soma2 = function (a, b) {
  return a + b;
};
// Atribuindo uma função de "flecha" em constantes
function soma3(a, b) {
  return a + b;
}

const hello1 = () => "Hello World!";
const hello2 = (name) => "Hello " + name;
const hello3 = (name) => {
  return "Hello " + name;
};
console.log(hello3("João JJJ"));

const somar2 = function (a, b) {
  return a + b;
};
console.log(somar2(1, 3));

const somar3 = (a, b) => a + b;
console.log(somar3(1, 3));

console.log("***");
console.log("******");
console.log("*********");
