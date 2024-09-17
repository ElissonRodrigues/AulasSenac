const prompt = require('prompt-sync')();

const ganho_por_hora = parseFloat(prompt('Digite o valor que você ganha por hora: '));
const horas_trabalhadas = parseFloat(prompt('Digite quantas horas você trabalhou no mês: '));

const salario = ganho_por_hora * horas_trabalhadas;

console.log(`O salário que você receberá no final do mês é: R$${salario.toFixed(2)}`);