
console.log("Hello World!");

let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
console.log("A sum é:", sum);

let value1 = 42;
if (typeof value1 === 'number') {
    console.log("É um número");
} else {
    console.log("Não é um número");
}

let value2 = "Hello World!";
if (typeof value2 === 'string') {
    console.log("É uma string");
} else {
    console.log("Não é uma string");
}

let value3 = true;
if (typeof value3 === 'boolean') {
    console.log("É um booleano");
} else {
    console.log("Não é um booleano");
}

let num3 = 20;
let num4 = 7;
let subtracao = num3 - num4;
console.log("A subtração é:", subtracao);

let num5 = 6;
let num6 = 7;
let multiplicacao = num5 * num6;
console.log("A multiplicação é:", multiplicacao);

let num7 = 50;
let num8 = 5;
let divisao = num7 / num8;
console.log("A divisão é:", divisao);

let value4 = 10;
if (typeof value4 === 'number' && value4 % 2 === 0) {
    console.log("É um número par");
} else {
    console.log("Não é um número par");
}

let value5 = 7;
if (typeof value5 === 'number' && value5 % 2 !== 0) {
    console.log("É um número ímpar");
} else {
    console.log("Não é um número ímpar");
}