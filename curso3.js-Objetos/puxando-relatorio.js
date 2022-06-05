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

let relatorio="";

for (let info in cliente){
    if (typeof cliente[info] === 'object' || typeof cliente[info] === 'function'){
        continue
    }else{
    relatorio += `
    ${info} = ${cliente[info]}`
    }
}
console.log(relatorio)

