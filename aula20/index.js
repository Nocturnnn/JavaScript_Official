/*
Primitivos {imutáveis} = string, number, boolean, undefined, null {bigint, symbol}

Referência {mutável} Arrays, Objetos, Functions
*/

let a = [1, 2, 3]
b = a // não é cópia, os dois tem o mesmo lugar na memória

a.push(4)
console.log(a, b)

b.pop()
console.log(a, b)

let d = {
    nome: 'Sla',
    sobrenoem: 'Junior'
}

//se quiser copiar basta fazer assim
let c = [...b] //Array
let e = {...d} //Objeto