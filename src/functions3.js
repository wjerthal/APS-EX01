// Funções de alta ordem

const somar = (a, b) => a + b;
const subtrair = (a, b) => a - b;
const aplicarOperacao = (a, b, operacao) => operacao(a, b);

const resultado1 = aplicarOperacao(1, 2, somar);
const resultado2 = aplicarOperacao(1, 2, subtrair);

console.log(resultado1);
console.log(resultado2);

const somarX = (x) => (y) => x + y;
const somar1 = somarX(1);
const somar2 = somarX(2);
const somar3 = somarX(3);

console.log(somar2(5)); // retorna 7
console.log(somar3(5)); // retorna 8

// MAP

const vetor = [1, 2, 3, 4, 5, 6];

const dobro = (item) => 2 * item;

const vetorDobrado = vetor.map(dobro);

console.log(vetorDobrado);

const vetor10 = ["10", "20", "30"];
const stringToInt = (x) => parseInt(x);
const vetor20 = vetor10.map(stringToInt); // map realilza a função elemento a elemento do vetor
console.log(vetor20);

const vetor30 = vetor20.map((x) => x * x);
console.log(vetor30);

// Função que eleva ao quadrado
// código...
const vetor2_2 = [7, 8, 9];
const aoQuadrado2 = (item, indice, vetor2_2) => vetor2_2[indice] * item;
console.log(aoQuadrado2);
const vetor2_3 = vetor2_2.map(aoQuadrado2);
console.log(vetor2_3);

// código…
const vetor40 = [1, 2, 3, 4, 5, 6];
const vetorTransformado40 = vetor40.map((x) => x + 1);
console.log(vetor40);
console.log(vetorTransformado40);

const vetor50 = ["a", "b", "c"];
const toUpper = (str) => str.toUpperCase();
const maiusculas = vetor50.map(toUpper);
console.log(vetor50);
console.log(maiusculas);

// FILTER

const vetor60 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares1 = vetor60.filter((x) => x % 2 === 0); // filtra e passa para o vetor somente os pares
// ou
const pares2 = vetor60.filter(function (x) {
  return x % 2 == 0;
}); // filtra e passa para o vetor somente os pares
const impares1 = vetor60.filter(function (x) {
  return x % 2 != 0;
}); // filtra e passa para o vetor somente os pares
console.log(pares1);
console.log(pares2);
console.log(impares1);

const vetor70 = [10, 4, 5, 6, 2, 7, 3, 8, 9, 1];
const vetor70_2 = vetor70.filter((x) => x < 8);
const vetor70_3 = vetor70.filter((x) => x > 7 && x < 10);
console.log(vetor70);
console.log(vetor70_2);
console.log(vetor70_3);

// REDUCE

const vetor80 = [1, 2, 3, 4, 5, 6, 7];
const soma80 = vetor80.reduce((estado, item) => estado + item, 0); // estado é acumulador
console.log(soma80); // retorna 28  de 1 a 7
const mult80 = vetor80.reduce((estado, item) => estado * item, 1);
console.log(mult80); // retorna 5040 de 1 a 7

let vetor90 = [
  { nome: "nome1", nota1: 5, nota2: 4 },
  { nome: "nome2", nota1: 4, nota2: 3 },
  { nome: "nome3", nota1: 7, nota2: 8 },
  { nome: "nome4", nota1: 2, nota2: 7 },
  { nome: "nome5", nota1: 9, nota2: 9 }
];
const estadoInicial = {
  somaNota1: 0,
  somaNota2: 0,
  qtdNota1: 0,
  qtdNota2: 0
};
const result = vetor90.reduce((estado, valor) => {
  return {
    somaNota1: estado.somaNota1 + valor.nota1,
    somaNota2: estado.somaNota2 + valor.nota2,
    qtdNota1: estado.qtdNota1 + 1,
    qtdNota2: estado.qtdNota2 + 1
  };
}, estadoInicial);
console.log(result);

const matriz = [
  [1, 2, 3, 4, 5, 6],
  [6, 5, 4, 3, 2, 1],
  [6, 1, 5, 2, 3, 40]
];

const somaColuna = (estado, item) => {
  return [
    estado[0] + item[0] + item[1],
    estado[1] + item[2] + item[3],
    estado[2] + item[4] + item[5]
  ];
};
const vetor2 = matriz.reduce(somaColuna, [0, 0, 0]);
console.log(vetor2);

console.log("***");
console.log("******");
console.log("*********");
