const notas = [7, 8, 5, 9, 10];
notas.pop();
let soma = 0;

for (let i = 0; i < notas.length; i++){
    soma = soma + notas[i];
    
}
console.log(`A media das notas é: ${soma/notas.length}`);
