// Crie um laço for que calcule o fatorial de um numero (Por exemplo  5 fatorial = 5*4*3*2*1 = 120)

const prompt = require('prompt-sync')();

const num = parseInt(prompt('Digite um número: '));

let fatorial = 1;

for (let i = num; i > 0; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${num} é: ${fatorial}`);
