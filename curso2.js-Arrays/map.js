const contas = [200,300,400,100]

const contasAtualizadas = contas.map( conta =>
conta == 400 ? conta : ++conta)
//se conta for igual a 400, retorna o mesmo valor, se nao conta recebe mais 1

console.log(contasAtualizadas)