const conta = ['curso ingles','curso informatica', 'faculdade', 'cartão']
const valores = [210,150,400,300]

const contasESeusValores = [conta, valores]
//includes = booleano
//indexOf = 3
function exibeContasEValores(nomeConta){
    let indice;
    if(contasESeusValores[0].includes(nomeConta)){
        indice = contasESeusValores[0].indexOf(nomeConta)
        return contasESeusValores[0][indice] + ', seu valor é ' + contasESeusValores[1][indice]
    }else{
        return 'Conta não encontrada';
    }
    

}
console.log(exibeContasEValores('faculdade'))