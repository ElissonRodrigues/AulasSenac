let lista_semanas =  ["segunda", "terça", "quarta", "quinta", "sexta"]

caracter_repeat = 60

console.log("=".repeat(caracter_repeat))
console.log(" ".repeat(20) + "LISTA DE SEMANAS")
console.log("=".repeat(caracter_repeat))
console.log("")

console.log(`Semanas atuais: \n\n--> [${lista_semanas.join(', ')}]`)

lista_semanas.reverse()

console.log("")

console.log(`Lista de semanas após a inversão:\n\n--> [${lista_semanas.join(', ')}]`)
console.log("=".repeat(caracter_repeat))