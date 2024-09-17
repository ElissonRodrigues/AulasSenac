const prompt = require('prompt-sync')();

const lado = parseFloat(prompt("Digite o valor do lado do quadrado: "));

const area = lado * lado;

const dobroDaArea = area * 2;

console.log("O dobro da área do quadrado é: " + dobroDaArea);