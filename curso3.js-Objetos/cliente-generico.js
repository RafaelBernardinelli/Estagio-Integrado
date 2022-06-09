function cliente (nome, cpf, email,saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor){
        this.saldo += valor
    }
}
const Rafael = new cliente ("Rafael", "11753819938", "rafael@gmail.com", 3000);
console.log(Rafael)