//tipo number

const primeiroNumero = 1;

const segundoNumero = 1;

const somarNumeros = primeiroNumero - segundoNumero;

//console.log(somarNumeros);

//ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

//console.log(novaOperacao);

//NaN -> Not A Number (não é um número)

const altura = "Alura";
//console.log(altura * primeiroNumero );


//tipo string 

const texto1 = "Olá, mundo";
const texto2 = "Olá, mundo";
const senha = "senha1585";
const stringNumeros = "123455";


//concatenação (+)
const citacao = "Meu nome é ";
const meuNome = "Rafael";

//console.log(citacao + meuNome);

//Unicode - Tipos de caracter.
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)


//templete string OU templete literal


//transformando palavras para letra inicial minuscula
const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

//console.log(cidade === inputMinusculo); // true

//Tipo bolean

console.log(primeiroNumero === segundoNumero);