const nomes = ["Rafael", "Marcos", "Paulo", "Bruno"]
const notas = [7,4.5,8,9]

const reprovados = nomes.filter((_,indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`)