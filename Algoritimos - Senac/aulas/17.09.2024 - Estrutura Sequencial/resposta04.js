const prompt = require('prompt-sync')();

const nota01 = parseFloat(prompt('Digite a primeira nota: '));
const nota02 = parseFloat(prompt('Digite a segunda nota: '));
const nota03 = parseFloat(prompt('Digite a terceira nota: '));
const nota04 = parseFloat(prompt('Digite a quarta nota: '));

const media = (nota01 + nota02 + nota03 + nota04) / 4;

console.log(`A média das notas informadas é: ${media}`);
