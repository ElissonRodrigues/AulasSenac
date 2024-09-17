const prompt = require('prompt-sync')();

const num_em_metros = parseFloat(prompt('Digite um número em metros: '));

const num_em_centimetros = num_em_metros * 100;

console.log(`O número informado em centímetros é: ${num_em_centimetros}`);