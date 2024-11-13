const prompt = require('prompt-sync')();

const frutas = ["maçã", "banana", "laranja", "uva", "melancia", "abacaxi", "manga", "morango", "kiwi", "pera"]

nome_fruta = prompt("Digite o nome de uma fruta: ").toLocaleLowerCase()

if (frutas.includes(nome_fruta)){
    console.log(`${nome_fruta} está na lista`)
} else {
    console.log(`${nome_fruta} não está na lista`)
} 

