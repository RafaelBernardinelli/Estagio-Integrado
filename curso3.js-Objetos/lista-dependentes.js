const cliente = {
    nome:"Rafael",
    idade:20,
    cpf:"1557882592",
    email:"rafael@gmail.com",
    fones:["55995332664","55995252688"],
    dependentes: [{
        nome:"Patricia",
        parentesco:"irmã",
        idade:24
    }]
}
cliente.dependentes.push({
    nome:"Amanda",
    idade:20,
    parentesco:"cunhada"
})
console.log(cliente)

const quemÉMaisNova = cliente.dependentes.filter(dependente => dependente.idade===20)
console.log(quemÉMaisNova[0].nome)