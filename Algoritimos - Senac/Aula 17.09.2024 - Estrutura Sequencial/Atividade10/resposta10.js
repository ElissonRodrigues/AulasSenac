const prompt = require('prompt-sync')();

const temp_celsius = parseFloat(prompt('Digite a temperatura em Celsius: '));

const temp_fahrenheit = (temp_celsius * 9 / 5) + 32;

console.log(`A temperatura informada em Fahrenheit é: ${temp_fahrenheit.toFixed(2)}`);