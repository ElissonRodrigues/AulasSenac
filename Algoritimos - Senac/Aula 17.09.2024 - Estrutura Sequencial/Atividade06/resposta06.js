const prompt = require('prompt-sync')();

const raio = parseFloat(prompt('Digite o raio de um círculo: '));

const pi = 3.14159;
const area = pi * (raio * raio);

console.log(`A área do círculo informado é: ${area.toFixed(2)}`);