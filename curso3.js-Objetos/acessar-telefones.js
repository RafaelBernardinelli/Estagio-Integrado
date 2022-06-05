//Adicionando um array dentro do objeto
const cliente = {
    nome:"Rafael",
    idade:20,
    cpf:"1557882592",
    email:"rafael@gmail.com",
    fones:["55995332664","55995252688"],
}

cliente.fones.forEach(fone => console.log(fone))

//adicionando objeto (dependentes)
cliente.dependentes = {
    nome:"Patricia",
    parentesco:"irmã",
    idade:24
}


cliente.dependentes.nome = "Patricia Bernardinelli";
console.log(cliente)