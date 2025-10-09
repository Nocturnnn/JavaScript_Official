function Saudacao(nome){
    return `Boa tarde ${nome}`
}

const variavel = Saudacao('Luiz')
console.log(variavel)

const raiz = function(x){
    return x ** 0.5
}

console.log(raiz(9))

const raiz2 = (x) => { // função moderna
    return x ** 0.5
}

console.log(raiz2(9))