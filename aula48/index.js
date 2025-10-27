function criaMultiplicado(multiplicador){
    //se lembra
    return function(n){
        return n * multiplicador
    }
}
// função com return dentro de função, as variaveis tbm podem se tornar
// a função que esta em dentro
const duplica = criaMultiplicado(2)
const triplica = criaMultiplicado(3)
const quadriplica = criaMultiplicado(4)

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))