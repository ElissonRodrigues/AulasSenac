const lista_numeros =  [15, 20, 18, 22, 25, 20, 18, 22]

let soma = 0

for (let i = 0; i < lista_numeros.length; i++) {
    if (lista_numeros[i] == 18) {
        soma += 1
    }
}

console.log(`O numero 18 aparece ${soma} vezes na lista.`)