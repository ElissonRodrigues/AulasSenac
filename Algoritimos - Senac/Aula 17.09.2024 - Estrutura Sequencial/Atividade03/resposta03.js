const prompt = require('prompt-sync')();

const n1 = parseInt(prompt('Digite o primeiro número: '));
const n2 = parseInt(prompt('Digite o segundo número: '));

const soma = n1 + n2;

console.log(`A soma dos números informados é: ${soma}`);