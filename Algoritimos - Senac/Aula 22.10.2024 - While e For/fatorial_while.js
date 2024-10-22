const prompt = require('prompt-sync')();

let num = parseInt(prompt('Digite um número: '));

let fatorial = 1;

while (num > 0) {
    fatorial *= num;

    num --;

}

console.log(`O fatorial é: ${fatorial}`);