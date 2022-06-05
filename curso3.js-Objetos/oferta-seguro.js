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
                    


//includes (v ou f) = inclui, ou seja se a chave passada como parametro se inclui na lista de array

function oferecerSeguro(obj){
//pega todas as chaves do objeto passado como parametro
const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")){
        console.log(`O seguro será ofertado para o ${obj.nome}`)
    }
}
oferecerSeguro(cliente)

console.log(Object.keys(cliente)) //para os parametros
console.log(Object.values(cliente)) //para os valores dos parametros
console.log(Object.entries(cliente)) //retorna os parametros e os seus valores dentro de um array