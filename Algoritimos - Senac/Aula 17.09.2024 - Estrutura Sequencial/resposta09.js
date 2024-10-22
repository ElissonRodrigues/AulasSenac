const prompt = require('prompt-sync')();

const temp_fahrenheit = parseFloat(prompt('Digite a temperatura em Fahrenheit: '));

const temp_celsius = (temp_fahrenheit - 32) * 5 / 9;

console.log(`A temperatura informada em Celsius é: ${temp_celsius.toFixed(2)}`);
