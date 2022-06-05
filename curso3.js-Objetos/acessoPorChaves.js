const cliente = {
    nome:"Rafael",
    idade:20,
    cpf:"1157981519",
    email:"rafael@gmail.com",
}

const chaves = ["nome", "idade", "cpf", "email"]

    console.log(cliente[chaves[1]])
            //parametro de passada e incremento
chaves.forEach(itens => console.log(cliente[itens]))