const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let soma = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += (numeros[i] * 2);
}

console.log(`A soma dos números multiplicados por 2 é: ${soma}`);