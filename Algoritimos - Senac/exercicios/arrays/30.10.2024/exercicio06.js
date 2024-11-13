let nomes = ["Ana", "Bruno", "Carlos", "Diana"]

let last_index = nomes.indexOf(nomes[nomes.length - 1])

caracter_repeat = 36

console.log("=".repeat(caracter_repeat))
console.log(" ".repeat(11) + "LISTA DE NOMES")
console.log("=".repeat(caracter_repeat))
console.log(`\nNomes atuais: [${nomes.join(', ')}]`)
console.log(`\n>>> Index do último nome: ${last_index}` + "\n" + "=".repeat(caracter_repeat) + "\n")

console.log("Nome que será removido:" + "\n" + `--> ${nomes[nomes.length - 1]}` + "\n" + "=".repeat(caracter_repeat) + "\n")

nomes.pop(last_index)

console.log("Lista de nomes após a remoção:")
console.log(`--> [${nomes.join(', ')}]`)
console.log("=".repeat(caracter_repeat))