const cliente = {
    nome:"Rafael",
    idade:20,
    cpf:"1557882592",
    email:"rafael@gmail.com",
    fones:["55995332664","55995252688"],
    //array de objetos
    dependentes: [
        {
        nome:"Patricia",
        parentesco:"irmã",
        idade:24 },
        {
        nome:"Amanda",
        idade:20,
        parentesco:"cunhada"
        }
    ],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}
console.log(`saldo anterior R$ ${cliente.saldo},00`)
cliente.depositar(50)
console.log(`novo saldo R$ ${cliente.saldo},00`)

//this = este objeto