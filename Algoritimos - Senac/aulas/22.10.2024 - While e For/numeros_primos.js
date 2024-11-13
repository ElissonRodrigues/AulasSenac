// É primo ou Não
// Um número primo é um número natural maior que 1, que tem apenas dois divisores possíveis: 1 e ele mesmo.
// Só pode ser divisivel por 2 vezes

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número: '));

let divisores = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        divisores++;
    }

    if (divisores > 2) {
        break;
    }
}

if (divisores == 2) {
    console.log(`O número ${numero} é primo`);
} else {
    console.log(`O número ${numero} não é primo`);
}