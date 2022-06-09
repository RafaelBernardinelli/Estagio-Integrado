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

class ClientePoupanca extends Cliente {
    constructor (nome, email, cpf, saldo, saldoPoupanca){
    super(nome, email, cpf, saldo)
    this.saldoPoupanca = saldoPoupanca
    }
    depositaPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const Rafael = new ClientePoupanca("Rafael", "rafael@gmail.com", "11753819938", 1000,2000)
console.log (Rafael)

Rafael.depositar(500)
Rafael.depositaPoupanca(1000)

console.log(Rafael)