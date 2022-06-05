const timesA = {
    melhor:"sao paulo",
    pior:"corinthians"
} 
const timesB = {
    melhorb:"Bahia",
    piorb:"vasco"
}

const uniao = JSON.stringify({...timesA, ...timesB})
const JS = JSON.parse(uniao)
console.log(JS)
