const nomes = ['Luiz Otávio', 'Mateus Vitor', 'Maria Madalena'];

for (let valor of nomes) { //pega o valor do array
    console.log(valor)
}

console.log('####')

nomes.forEach(function(valor, indece, array){
    console.log(valor, indece, array)
})