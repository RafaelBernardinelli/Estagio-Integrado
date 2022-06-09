class Cliente {
    constructor(nome, email, cpf, saldo){
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this. saldo = saldo
    }

    depositar(saldo){
        this.saldo += saldo
    }
    exbirSaldo (){
        console.log(this.saldo)
    }
}
const Rafael = new Cliente ("Rafael", "rafael@gmail.com", "11753819988", 800)
Rafael.exbirSaldo()
console.log(Rafael)