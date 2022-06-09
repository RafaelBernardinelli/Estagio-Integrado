function cliente (nome, cpf, email,saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor){
        this.saldo += valor
    }
}
function clientePoupanca (nome, cpf, email, saldo, saldoPoup){
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const Amanda = new clientePoupanca ("amanda", "15485548629", "amanda@gmail.com", 800, 700)
console.log(Amanda)

clientePoupanca.prototype.depositarPoup = function (valor){
    this.saldoPoup += valor
}
Amanda.depositarPoup(500)
console.log(Amanda.saldoPoup)

//call = chamar as propriedades selecionadas para dentro da outra propriedade//