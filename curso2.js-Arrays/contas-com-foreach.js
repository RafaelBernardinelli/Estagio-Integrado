const contas = [200,100,400,300]

let mediaDasContas = 0;

//forEach(para cada) = para cada conta, somar ...
//função callback
contas.forEach(contas => {
    mediaDasContas += contas;
    
});
let media = mediaDasContas/contas.length;
console.log(media);

//callback

contas.forEach(imprimeContas);

function imprimeContas(conta){
    console.log(conta);
}