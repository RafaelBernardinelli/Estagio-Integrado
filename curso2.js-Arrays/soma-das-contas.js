const valores = [200,300,400,150];
let mediaDasContas = 0;

for(let i = 0; i < valores.length; i++){
    mediaDasContas += valores[i];
}

let media = mediaDasContas/valores.length;
console.log(media);