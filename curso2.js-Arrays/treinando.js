const contas = ["Meu cartão", "cartão mãe", "Faculdade", "Curso de inglês"];
//splice remove de acordo com os parametros
contas.splice(0,1)
//console.log(contas);
const valores = [200,300,400,210];
valores.splice(0,1)
//lista com duas dimensoes = arrays que contem arrays
const contasESeusValores = [contas, valores];

console.log(`${contasESeusValores[0][2]}, está no valor de ${contasESeusValores[1][2]}.`)

const concatenando = contas.concat(valores); 
console.log(concatenando);